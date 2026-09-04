export default function ExecutiveMetricCard({

    title,

    value,

    subtitle,

    icon,

    accent = "text-cyan-500",

    valueSize = "text-5xl",

    className = "",

}) {

    return (

        <div
            className={`
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-lg
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                ${className}
            `}
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="uppercase tracking-[0.20em] text-xs text-slate-500">

                        {title}

                    </p>

                    <h2 className={`${valueSize} font-bold mt-6 ${accent}`}>

                        {value}

                    </h2>

                    {subtitle && (

                        <p className="mt-4 text-slate-500">

                            {subtitle}

                        </p>

                    )}

                </div>

                {icon && (

                    <div className="text-4xl">

                        {icon}

                    </div>

                )}

            </div>

        </div>

    );

}