export default function ExecutiveButton({
    onClick,
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    fullWidth = false,
    icon,
    className = "",
}) {

    const variants = {

        primary:
            "bg-slate-900 text-white hover:bg-slate-800",

        secondary:
            "bg-cyan-600 text-white hover:bg-cyan-700",

        success:
            "bg-emerald-600 text-white hover:bg-emerald-700",

        warning:
            "bg-amber-500 text-slate-900 hover:bg-amber-400",

        danger:
            "bg-red-600 text-white hover:bg-red-700",

        purple:
            "bg-purple-600 text-white hover:bg-purple-700",

        outline:
            "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",

    };

    const sizes = {

        sm: "px-4 py-2 text-sm",

        md: "px-6 py-3 text-base",

        lg: "px-8 py-4 text-lg",

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                shadow-md
                hover:shadow-xl
                active:scale-95
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
        >

            {icon && (

                <span className="text-lg">                    {icon}

                </span>

            )}

            <span>

                {children}

            </span>

        </button>

    );

}