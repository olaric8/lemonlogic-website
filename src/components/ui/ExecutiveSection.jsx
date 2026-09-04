export default function ExecutiveSection({

    eyebrow,

    title,

    description,

    children,

    action,

    className = "",

    padding = "p-8",

}) {

    return (

        <section

            className={`
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-lg
                ${padding}
                ${className}
            `}

        >

            {(eyebrow || title || description || action) && (

                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 mb-8">

                    <div className="flex-1">

                        {eyebrow && (

                            <p className="uppercase tracking-[0.35em] text-xs text-slate-500">

                                {eyebrow}

                            </p>

                        )}

                        {title && (

                            <h2 className="text-3xl font-bold text-slate-900 mt-4">

                                {title}

                            </h2>

                        )}

                        {description && (

                            <p className="text-slate-500 mt-4 leading-8 max-w-4xl">

                                {description}

                            </p>

                        )}

                    </div>

                    {action && (                        <div className="xl:flex-shrink-0">

                            {action}

                        </div>

                    )}

                </div>

            )}

            <div>

                {children}

            </div>

        </section>

    );

}