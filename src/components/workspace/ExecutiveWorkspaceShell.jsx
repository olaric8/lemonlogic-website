/*
=========================================================

LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)

Executive Workspace Shell™

Purpose

"Provide the Executive Operating System."

Responsibilities

• Executive Header
• Executive Navigation
• Workspace Switching
• Workspace Rendering

Business logic belongs inside the individual
workspace components.

=========================================================
*/

import { useMemo, useState } from "react";

import ExecutiveWorkspaceHeader from "./ExecutiveWorkspaceHeader";
import ExecutiveNavigation from "./ExecutiveNavigation";

import ExecutiveOverview from "./ExecutiveOverview";
import ExecutiveProgramme from "./ExecutiveProgramme";
import ExecutiveDelivery from "./ExecutiveDelivery";
import ExecutiveAnalytics from "./ExecutiveAnalytics";
import ExecutiveBoard from "./ExecutiveBoard";
import ExecutiveSettings from "./ExecutiveSettings";

const WORKSPACES = {

    overview: ExecutiveOverview,

    programme: ExecutiveProgramme,

    delivery: ExecutiveDelivery,

    analytics: ExecutiveAnalytics,

    board: ExecutiveBoard,

    settings: ExecutiveSettings,

};

function WorkspaceRenderer({

    workspace,

}) {

    const ActiveWorkspace = useMemo(() => {

        return (

            WORKSPACES[workspace] ||

            ExecutiveOverview

        );

    }, [workspace]);

    return <ActiveWorkspace />;

}

export default function ExecutiveWorkspaceShell() {

    const [

        activeWorkspace,

        setActiveWorkspace,

    ] = useState("overview");

    return (

        <div className="min-h-screen bg-slate-100">

            {/* =====================================
                Executive Workspace Header
            ====================================== */}

            <ExecutiveWorkspaceHeader />

            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

                {/* =====================================
                    Executive Navigation
                ====================================== */}

                <ExecutiveNavigation

                    currentWorkspace={activeWorkspace}

                    onWorkspaceChange={setActiveWorkspace}

                />

                {/* =====================================
                    Active Workspace
                ====================================== */}

                <section>
                                        <WorkspaceRenderer

                        workspace={activeWorkspace}

                    />

                </section>

            </main>

        </div>

    );

}