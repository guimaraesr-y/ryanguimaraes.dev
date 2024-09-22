interface floatInputProps {
    id?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    borderColor: string;
    type: string;
    name: string;
    required: boolean;
}

const FloatInput = ({ 
    id, 
    value,
    onChange,
    placeholder,
    borderColor,
    type,
    name,
    required,
}: floatInputProps) => {
    return (
        <div>
            <div className="relative z-0">
                <input 
                    type={ type }
                    id={ id }
                    name={ name }
                    className={`peer block w-full appearance-none border-0 border-b border-[${borderColor}] bg-transparent px-0 py-2.5 text-sm focus:outline-none focus:ring-0`}
                    onChange={ onChange }
                    value={ value }
                    placeholder=" "
                    required={ required }
                    />
                <label 
                    htmlFor={ id } 
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`}
                    >
                    { placeholder } { required && <span className="text-red-400">*</span> }
                </label>
            </div>
        </div>
    )
}

export default FloatInput;