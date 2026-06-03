# Design — GSSA 전용 포지셔닝 재정비 (서비스 영역)

- **Feature**: `gsa-positioning-services`
- **Repo**: `goodmangls/goodman-gsa` (GSSA 사업 전용 사이트)
- **Branch**: `feat/gsa-positioning-services`
- **Date**: 2026-06-03
- **상태**: 설계 (사용자 검토 대기)

## 1. 배경 / 목표

Goodman 은 한 회사·두 사업(GSSA/CSA + 종합물류)을 **두 별도 사이트**로 운영한다. 종합물류는 자매 사이트(`goodman-gls`, 별도 도메인)로 분리됐다. 이 사이트(`goodman-gsa`)는 **GSSA에 집중**하도록 포지셔닝을 재정비한다.

**선행 작업(PR #1, 머지됨 `b96e88f`)이 이미 처리한 영역** — 중복 금지:
- `/network` Member(MPL/EAN) → Benchmark(Global/Korea GSSA) 카드
- `TrustBadges` MPL/EAN → GSSA/CSA, `Footer` 배지 IATA/MPL/EAN → IATA/GSSA/ECS
- i18n GSSA 정체성/credentials/timeline, `layout.tsx` SEO 키워드

**본 설계의 잔여(신규) 범위**: 홈 서비스 섹션 + `/services` 페이지 + 물류 크로스링크.

## 2. 범위

### A. 홈 `ServicesShowcase` (`home.services` i18n)
현재 "Beyond GSSA — Full logistics capability"(air/ocean/project/mro) → **항공사 대상 GSSA 역량**으로 재카피.
- eyebrow/titleLine/lead: GSSA 역량 중심으로 교체.
- items: 물류 4종 → **GSSA 역량 항목**으로 교체(아래 §4).
- 하단에 **물류 콜아웃 1개**(dormant 링크): "Goodman은 종합물류도 제공합니다 →" (env 미설정 시 텍스트만/숨김).
- 컴포넌트 구조·클래스 변경 없음(콘텐츠/키만). 항목 수가 바뀌면 `serviceKeys` 배열만 조정.

### B. `/services` 페이지 (`src/app/services/page.tsx`)
현재 **하드코딩**된 프로젝트카고 케이스(Semiconductor/Manufacturing/Turbine) — GSSA도 i18n도 아님 → **전면 재작성**.
- 항공사 대상 GSSA 역량 상세 페이지로 전환(§4 역량을 섹션별 설명 + 근거).
- **i18n화**: 신규 `servicesPage` (또는 `pages.services`) 네임스페이스, en/ko 동기.
- 기존 레이아웃 패턴(sticky 헤더, canvas/obsidian 교차, 케이스 블록) **재사용** — 디자인 시스템 무변경.
- 페이지 하단에 물류 크로스링크 CTA(dormant).

### C. 물류 크로스링크 (dormant, 도메인 미연결 대응)
- env `NEXT_PUBLIC_LOGISTICS_SITE_URL`. 값 있으면 링크 렌더, 없으면 **숨김(또는 텍스트만)**.
- 작은 헬퍼(예: `src/lib/site-links.ts`)로 단일화. 배치: Footer + 홈 콜아웃 + `/services` CTA.
- 도메인 준비 시 env 한 줄로 활성, 코드 재작업 없음.

### D. i18n
- `messages/en.json` + `messages/ko.json` 동기, 키 parity 검증. 제거되는 물류 키 정리(orphan 방지).

## 3. 범위 밖
- network/trust/identity/SEO (PR #1 완료)
- 디자인 시스템·레이아웃·토큰 변경
- 도메인/Vercel 연결 (운영)
- `goodman-gls` 의 a11y `242685b` cherry-port (별도·나중)
- `goodman-gls`(main)→GSSA 역방향 링크 (자매 repo 별도 작업)

## 4. 제안 콘텐츠 — GSSA 역량 (whyGssa 기반, 검토 필요)
1. **Cargo Sales & Revenue Growth** — 한국 시장 화물 영업·load factor·매출 성장
2. **Pricing & Yield Management** — 요율 전략·일드 최적화
3. **Capacity Management** — 스페이스·allotment 운영
4. **Forwarder & Customer Relations** — 포워더 네트워크·고객 관계
5. **Market Intelligence & Reporting** — 실시간 시장 정보·리포팅
6. **GSA/CSA Brand Representation** — 항공사 브랜드 한국 대표 (선택)

> 문구·항목 수는 사용자 검토로 확정. 영문 우선, 한글 동기.

## 5. 테스트 / 검증
- i18n 키 parity(en↔ko) 스크립트/수동 확인
- `npm run lint`, `npm run build`
- 시각 점검 320/768/1024/1440, 라이트/다크
- PR → CodeRabbit + Vercel preview (repo 기존 워크플로)

## 6. 워크플로
`feat/gsa-positioning-services` → 구현 → push → PR(goodmangls/goodman-gsa) → CodeRabbit/Vercel → 머지. 공통 디자인 fix 는 `gls` remote cherry-pick(merge-base `6528757`).
