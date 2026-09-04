export default function ExecutivePageHeader({

    eyebrow,

    title,

    description,

    badge,

    action,

    variant = "dark",

}) {

    const variants = {

        dark:
            "from-slate-900 via-slate-800 to-slate-900 text-white",

        blue:
            "from-cyan-700 via-cyan-600 to-blue-700 text-white",

        emerald:
            "from-emerald-700 via-emerald-600 to-teal-700 text-white",

        purple:
            "from-purple-700 via-purple-600 to-indigo-700 text-white",

    };

    return (

        <section

            className={`bg-gradient-to-r ${variants[variant]} rounded-3xl shadow-2xl p-8`}

        >

            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

                <div className="flex-1">

                    {eyebrow && (

                        <p className="uppercase tracking-[0.35em] text-xs opacity-80">

                            {eyebrow}

                        </p>

                    )}

                    <h1 className="text-4xl xl:text-5xl font-bold mt-4">

                        {title}

                    </h1>

                    {description && (

                        <p className="mt-5 max-w-4xl leading-8 opacity-90">

                            {description}

                        </p>

                    )}

                    {badge && (                        <div className="mt-6">

                            {badge}

                        </div>

                    )}

                </div>

                {(action || badge) && (

                    <div className="xl:flex-shrink-0 flex flex-col items-start xl:items-end gap-4">

                        {action}

                    </div>

                )}

            </div>

        </section>

    );

}