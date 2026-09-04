/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Navigation™

Purpose

"Where do I want to work?"

Enterprise Workspace Navigation

=========================================================
*/

import { useState } from "react";

const navigationItems = [
    {
        id: "overview",
        icon: "🏠",
        title: "Overview",
        description: "Executive Overview",
    },
    {
        id: "programme",
        icon: "🚀",
        title: "Programme",
        description: "Transformation Programme",
    },
    {
        id: "delivery",
        icon: "📈",
        title: "Delivery",
        description: "Execution Centre",
    },
    {
        id: "analytics",
        icon: "📊",
        title: "Analytics",
        description: "Executive Analytics",
    },
    {
        id: "board",
        icon: "📑",
        title: "Board",
        description: "Board Reporting",
    },
    {
        id: "settings",
        icon: "⚙️",
        title: "Settings",
        description: "Workspace Settings",
    },
];

function NavigationButton({
    item,
    active,
    onClick,
}) {

    return (

        <button
            onClick={() => onClick(item.id)}
            className={`
                group
                rounded-2xl
                px-6
                py-5
                transition-all
                duration-300
                border
                text-left
                ${
                    active
                        ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                        : "bg-white border-slate-200 hover:border-cyan-400 hover:shadow-lg"
                }
            `}
        >

            <div className="flex items-center gap-4">

                <div
                    className={`
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        ${
                            active
                                ? "bg-white/10"
                                : "bg-slate-100 group-hover:bg-cyan-50"
                        }
                    `}
                >

                    {item.icon}

                </div>

                <div>

                    <h3
                        className={`
                            font-bold
                            ${
                                active
                                    ? "text-white"
                                    : "text-slate-900"
                            }
                        `}
                    >

                        {item.title}

                    </h3>

                    <p
                        className={`
                            text-sm
                            ${
                                active
                                    ? "text-slate-300"
                                    : "text-slate-500"
                            }
                        `}
                    >

                        {item.description}

                    </p>

                </div>

            </div>

        </button>

    );

}

export default function ExecutiveNavigation({

    currentWorkspace = "overview",

    onWorkspaceChange,

}) {

    const [active, setActive] =
        useState(currentWorkspace);

    function handleClick(workspace) {

        setActive(workspace);

        if (onWorkspaceChange) {

            onWorkspaceChange(workspace);

        }

    }

    return (

        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

            <div className="px-8 py-6 border-b">

                <p className="uppercase tracking-[0.35em] text-xs text-slate-500">

                    Executive Workspace

                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-3">

                    Navigation

                </h2>

                <p className="text-slate-500 mt-3">

                    Switch instantly between Executive
                    workspaces.

                </p>

            </div>

            <div className="grid lg:grid-cols-4 xl:grid-cols-7 gap-5 p-8">
                {navigationItems.map((item) => (
                    <NavigationButton
                        key={item.id}
                        item={item}
                        active={active === item.id}
                        onClick={handleClick}
                    />
                ))}
            </div>

            <div className="border-t bg-slate-50 px-8 py-5">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <div>

                        <p className="text-sm text-slate-500">

                            Active Workspace

                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-1">

                            {
                                navigationItems.find(
                                    (item) => item.id === active
                                )?.title
                            }

                        </h3>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">

                            <span className="w-2 h-2 rounded-full bg-emerald-500" />

                            Workspace Ready

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}