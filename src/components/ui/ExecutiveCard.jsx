import clsx from "clsx";

export default function ExecutiveCard({

    children,

    title,

    subtitle,

    action,

    footer,

    className = "",

    padding = "p-8",

    variant = "default",

    hover = true,

}) {

    const variants = {

        default:
            "bg-white border border-slate-200",

        dark:
            "bg-slate-900 border border-slate-800 text-white",

        glass:
            "bg-white/80 backdrop-blur-xl border border-white/40",

        accent:
            "bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700",

    };

    return (

        <section

            className={clsx(

                "rounded-3xl",

                "shadow-lg",

                "transition-all",

                "duration-300",

                hover &&

                    "hover:-translate-y-1 hover:shadow-2xl",

                variants[variant],

                padding,

                className

            )}

        >

            {(title || subtitle || action) && (

                <header className="flex items-start justify-between gap-6 mb-8">

                    <div>

                        {title && (                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                                {title}

                            </h2>

                        )}

                        {subtitle && (

                            <p className="text-slate-500 dark:text-slate-300 mt-2">

                                {subtitle}

                            </p>

                        )}

                    </div>

                    {action && (

                        <div>

                            {action}

                        </div>

                    )}

                </header>

            )}

            <div>

                {children}

            </div>

            {footer && (

                <footer className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">

                    {footer}

                </footer>

            )}

        </section>

    );

}