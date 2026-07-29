"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Input, Textarea } from "@/app/components/ui/Input";
import { contactSchema } from "@/app/lib/validation";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactProps {
  contactEmail?: string;
}

export function Contact({ contactEmail }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as keyof FormErrors] = issue.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Mensagem enviada. Obrigado pelo contexto!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Não foi possível enviar agora.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Erro de conexão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-rule relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="site-grid absolute inset-0 opacity-40" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="section-label">Se você chegou até aqui, já temos assunto.</p>
          <h2 className="display mt-5 max-w-[10ch] text-balance text-[2.5rem] leading-[1] text-paper sm:text-7xl sm:leading-[0.94]">
            Pode me chamar de Ryan.
          </h2>
          <p className="mt-8 max-w-md text-base leading-8 text-muted">
            Pode ser uma vaga, um projeto, uma dúvida técnica ou só uma conversa boa
            sobre software. Se tiver contexto, melhor ainda.
          </p>
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-paper/50 pb-1 text-sm font-bold text-paper"
            >
              {contactEmail}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="border border-line bg-background/80 p-5 backdrop-blur sm:p-8 lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold text-muted">
                  Seu nome
                </label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Como devo chamar você?"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold text-muted">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold text-muted">
                O que você quer construir ou melhorar?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Contexto, objetivo, prazo ou o que já foi tentado..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>

            <AnimatePresence mode="wait">
              {status !== "idle" ? (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  role="status"
                  className={`flex items-center gap-3 border p-4 text-sm ${
                    status === "success"
                      ? "border-acid/40 bg-acid/10 text-acid"
                      : "border-coral/40 bg-coral/10 text-coral"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  {statusMessage}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isLoading}
              className="focus-ring inline-flex items-center gap-3 bg-acid px-5 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Enviando..." : "Enviar contexto"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
