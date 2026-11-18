export type Study = {
  slug: string
  number: string
  title: string
  result: string
  category: string
  year: string
  company: string
  role: string
  timeframe: string
  sections: { label: string; body: string }[]
}

export const studies: Study[] = [
  {
    slug: 'onboarding', number: '01', title: '[A better first mile]', result: '[Improved activation by making the first session feel effortless.]', category: '[GROWTH]', year: '[2025]', company: '[Company name]', role: '[Product Manager]', timeframe: '[2024 — 2025]',
    sections: [
      { label: '[The challenge]', body: '[Describe the user problem, business context, and what made the challenge worth solving.]' },
      { label: '[The approach]', body: '[Explain the research, key insight, and how the team aligned around a focused product direction.]' },
      { label: '[The outcome]', body: '[Share the measurable result, what changed for customers, and what you learned.]' },
    ],
  },
  {
    slug: 'marketplace', number: '02', title: '[A marketplace in motion]', result: '[Connected supply and demand with a simpler matching experience.]', category: '[PLATFORM]', year: '[2024]', company: '[Company name]', role: '[Product Manager]', timeframe: '[2023 — 2024]',
    sections: [
      { label: '[The challenge]', body: '[Describe the user problem, business context, and what made the challenge worth solving.]' },
      { label: '[The approach]', body: '[Explain the research, key insight, and how the team aligned around a focused product direction.]' },
      { label: '[The outcome]', body: '[Share the measurable result, what changed for customers, and what you learned.]' },
    ],
  },
  {
    slug: 'insights', number: '03', title: '[From data to direction]', result: '[Turned scattered signals into decisions teams could act on.]', category: '[ANALYTICS]', year: '[2023]', company: '[Company name]', role: '[Product Manager]', timeframe: '[2022 — 2023]',
    sections: [
      { label: '[The challenge]', body: '[Describe the user problem, business context, and what made the challenge worth solving.]' },
      { label: '[The approach]', body: '[Explain the research, key insight, and how the team aligned around a focused product direction.]' },
      { label: '[The outcome]', body: '[Share the measurable result, what changed for customers, and what you learned.]' },
    ],
  },
]
