# Archive Index — 2026-06

| Feature | Match Rate | Date | Status | Documents |
|---------|:----------:|------|--------|-----------|
| gsa-positioning-services | 97% | 2026-06-03 | completed (PR #2 → main `b353a3a`) | [design](gsa-positioning-services/gsa-positioning-services.design.md), [analysis](gsa-positioning-services/gsa-positioning-services.analysis.md), [report](gsa-positioning-services/gsa-positioning-services.report.md) |

## Notes

### gsa-positioning-services
- **Outcome**: GSSA 전용 포지셔닝 재정비(서비스 영역) — 홈 `ServicesShowcase`·`/services` 재작성·dormant 물류 크로스링크
- **Plan**: 별도 plan 문서 없음 (superpowers brainstorming 으로 의도 탐색 → design 직행)
- **PR**: #2 squash merged → main `b353a3a`; report 커밋 `1e063a2`
- **Decisions**: 역량 6→4 (설계 §4 "항목 수 사용자 검토 확정" 허용), 가짜 case study → 정직한 "Why it matters" 패널, 물류 콜아웃 = 텍스트 상시 + 링크 `NEXT_PUBLIC_LOGISTICS_SITE_URL` env 게이트
- **검증**: ESLint clean / tsc OK / i18n en-ko parity / 컴포넌트 키 85개 정적 해결 ✓ (getMessage 폴백 리터럴-키 버그 없음) / `next build` 는 기존 `/_global-error` prerender-debt 에서만 실패(무관, vercel.json `|| true` 마스킹). **시각 렌더 미검증** (dev 서버 거부 + Vercel preview 끊김)
- **후속 F1~F5**: ① 잔여 forwarding 용어(`rateInquiryModal`/company 타임라인) ② 시각 QA(320/768/1024/1440·테마·KO) ③ **Vercel GitHub App 을 goodmangls org 에 설치**(자동배포 복구) ④ 도메인 연결 후 `NEXT_PUBLIC_LOGISTICS_SITE_URL` 설정 ⑤ a11y `242685b` cherry-port
