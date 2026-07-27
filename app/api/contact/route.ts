import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/app/lib/validation";
import { ContactService } from "@/app/lib/services/ContactServiceStrategy";
import { ResendProvider } from "@/app/lib/services/providers/ResendProvider";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  
  const vercelForwarded = request.headers.get("vercel-forwarded-for");
  if (vercelForwarded) {
    return vercelForwarded.split(",")[0].trim();
  }
  
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  
  return "IP não identificado";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;
    const ip = getClientIp(request);

    const provider = new ResendProvider();
    const contactService = new ContactService(provider);
    
    const visitorResult = await contactService.sendToVisitor({ name, email, message, ip }, email);
    if (!visitorResult.success) {
      console.error("Visitor email failed:", visitorResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
