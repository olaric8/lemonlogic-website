export default function ExecutiveBadge({

    children,

    variant = "default",

    size = "md",

    rounded = true,

    className = "",

}) {

    const variants = {

        default:
            "bg-slate-100 text-slate-700",

        primary:
            "bg-cyan-100 text-cyan-800",

        success:
            "bg-emerald-100 text-emerald-800",

        warning:
            "bg-amber-100 text-amber-800",

        danger:
            "bg-red-100 text-red-800",

        purple:
            "bg-purple-100 text-purple-800",

        dark:
            "bg-slate-900 text-white",

    };

    const sizes = {

        sm: "px-2 py-1 text-xs",

        md: "px-4 py-2 text-sm",

        lg: "px-5 py-3 text-base",

    };

    return (

        <span

            className={`
                inline-flex
                items-center
                justify-center
                font-semibold
                uppercase
                tracking-wide
                ${rounded ? "rounded-full" : "rounded-lg"}
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
        >
            {children}

        </span>

    );

}