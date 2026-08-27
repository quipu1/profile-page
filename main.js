/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    marine: {

        name:
            "해양기상방송시스템",

        title:
            "문서가 부족한 시스템에서 데이터 흐름을 추적해 실제 방송 운영까지 연결했습니다.",

        period:
            "2025.09 — 2025.12",

        tags:
            [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "Quartz",
                "JWT"
            ],

        situation:
            "프로젝트 막바지에 투입되어 기존 시스템의 구조와 방송 처리 흐름을 빠르게 파악해야 했습니다.",

        problem:
            "인수인계와 문서가 충분하지 않아 전문 데이터가 어떤 과정을 거쳐 가공되고 방송되는지 전체 흐름을 파악하기 어려웠습니다.",

        approach:
            "실제 수신 전문을 시작점으로 Java 코드, DB 함수·프로시저, 컬럼 구조와 가공 순서를 역추적했습니다.",

        solution:
            "전문 파싱과 데이터 처리 오류를 수정하고 TTS 엔진을 검증한 뒤 Quartz 기반 방송 스케줄러까지 연동했습니다.",

        result:
            "전문 수신부터 방송 준비, 음성 생성, 방송 시작과 완료까지 전체 흐름을 실제 운영 환경에서 반복 검증했습니다."

    },


    drainage: {

        name:
            "내배수 침수관리 시스템",

        title:
            "데이터 중복과 정합성 문제를 수집 구조부터 다시 정리했습니다.",

        period:
            "2024.06 — 2026.03",

        tags:
            [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "OAuth2",
                "React"
            ],

        situation:
            "외부 API와 기존 DB 데이터를 함께 사용하는 침수관리 시스템의 수집 및 관리 기능을 담당했습니다.",

        problem:
            "데이터 중복 적재, UTC와 KST 시간 기준 차이, 기존 DB와 신규 API 간 상태 불일치가 발생했습니다.",

        approach:
            "API 응답과 기존 적재 데이터를 비교하면서 수집 기준과 저장 시점, 상태 반영 로직을 확인했습니다.",

        solution:
            "OAuth2 기반 수집 스케줄러를 재작성하고 최신 샘플 기준 수집, 중복 방지, 시간 변환 및 데이터 상태 관리 로직을 적용했습니다.",

        result:
            "수집·저장·조회 단계에서 동일한 데이터 기준을 사용할 수 있도록 구조를 정리했습니다."

    },


    gyeonggi: {

        name:
            "경기도청 시스템 통합·이전",

        title:
            "서로 다른 구조의 레거시 시스템을 하나의 통합 환경에 맞췄습니다.",

        period:
            "2026.03 — 2026.05",

        tags:
            [
                "Java",
                "JSP",
                "Vue",
                "Tiles",
                "JavaScript"
            ],

        situation:
            "서로 다른 시기에 개발된 여러 행정 시스템을 하나의 통합 환경으로 이전하는 프로젝트에 참여했습니다.",

        problem:
            "JSP와 Vue 등 구현 방식이 혼재했고 시스템마다 화면 구조와 공통 컴포넌트 사용 방식이 달랐습니다.",

        approach:
            "각 시스템의 공통 영역과 개별 기능을 구분하고 기존 코드와 UI 구조를 비교했습니다.",

        solution:
            "Tiles와 공통 태그 구조를 기준으로 화면을 정리하고 기존 기능을 통합 환경에 맞게 이식했습니다.",

        result:
            "6개 시스템의 기존 기능을 통합 환경에서 사용할 수 있도록 이전하고 QC 과정에서 발생한 수정사항까지 대응했습니다."

    }

};


/* =========================================================
   DOM
========================================================= */

const drawer =
    document.getElementById("projectDrawer");

const overlay =
    document.getElementById("drawerOverlay");

const closeButton =
    document.getElementById("drawerClose");


/* =========================================================
   OPEN DRAWER
========================================================= */

function openProject(projectKey) {

    const project =
        projects[projectKey];


    if (!project) {
        return;
    }


    document
        .getElementById("drawerProjectName")
        .textContent =
        project.name;


    document
        .getElementById("drawerTitle")
        .textContent =
        project.title;


    document
        .getElementById("drawerPeriod")
        .textContent =
        project.period;


    document
        .getElementById("drawerSituation")
        .textContent =
        project.situation;


    document
        .getElementById("drawerProblem")
        .textContent =
        project.problem;


    document
        .getElementById("drawerApproach")
        .textContent =
        project.approach;


    document
        .getElementById("drawerSolution")
        .textContent =
        project.solution;


    document
        .getElementById("drawerResult")
        .textContent =
        project.result;


    /* 기술 태그 */

    const tagArea =
        document.getElementById("drawerTags");


    tagArea.innerHTML = "";


    project.tags.forEach(tag => {

        const span =
            document.createElement("span");


        span.textContent =
            tag;


        tagArea.appendChild(span);

    });


    /* Drawer 열기 */

    drawer.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("drawer-open");

}


/* =========================================================
   CLOSE DRAWER
========================================================= */

function closeProject() {

    drawer.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("drawer-open");

}


/* =========================================================
   PROJECT BUTTON EVENT
========================================================= */

document
    .querySelectorAll(".view[data-project]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const projectKey =
                    this.dataset.project;


                openProject(projectKey);

            }
        );

    });


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeButton.addEventListener(
    "click",
    closeProject
);


/* =========================================================
   OVERLAY CLICK
========================================================= */

overlay.addEventListener(
    "click",
    closeProject
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            drawer.classList.contains("active")
        ) {

            closeProject();

        }

    }
);