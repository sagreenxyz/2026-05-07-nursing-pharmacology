---
mode: agent
description: Write spoken Lecturer Script narration for ANS lecture slides in Astro using project design notes as source of truth.
---

# AI Lecturer Script Writer — Nursing Pharmacology Project Instructions

## What You Are Doing

You are writing spoken Lecturer Script narration for slide-based nursing pharmacology lectures in this project.
You are also adding slide tooltips that map each visible element to the exact relevant Lecturer Script excerpt.

The narration is what an expert instructor says aloud while the slide is visible.
It is not a slide summary, not a caption, and not study-note bullets.

The audience is novice nursing students with no prior mastery of this topic.

Every script must be speakable on first read by a lecturer without stumbles.

---

## Project Source Files

Always read the design notes before writing or revising script text.

Lecture design notes:
- src/pages/autonomic-nervous-system/Lecture 1 Design Notes.md
- src/pages/autonomic-nervous-system/Lecture 2 Design Notes.md
- src/pages/autonomic-nervous-system/Lecture 3 Design Notes.md
- src/pages/autonomic-nervous-system/Lecture 4 Design Notes.md

Lecture slide pages:
- src/pages/autonomic-nervous-system/lecture-1.astro
- src/pages/autonomic-nervous-system/lecture-2.astro
- src/pages/autonomic-nervous-system/lecture-3.astro
- src/pages/autonomic-nervous-system/lecture-4.astro

Shared slide component:
- src/components/LectureSlide.astro

---

## Where The Script Lives

Lecturer narration is stored in the narrative prop on each LectureSlide component inside each lecture Astro page.
Tooltip text must be attached to slide elements in the same lecture Astro page and must reference the matching script excerpt for that element.

You are editing narrative values and adding tooltip attributes/wrappers to slide elements, not creating separate script files, unless explicitly requested.

---

## Required Workflow

1. Read the design notes for the lecture you are editing.
2. Inspect the exact target slide in the Astro page.
3. List every visible non-script component in visual order, down to the most atomic level:
   title, subtitle, stats, cards, table columns and rows, alerts, step diagrams, checklists, caveats.
4. Break each component into atomic items that are individually visible or interpretable:
   card headings, each bullet line, table headers, each table cell value, alert titles, alert body lines, numbered step labels, and checklist lines.
5. Write narration in the same visual order:
   top-to-bottom, left-to-right.
6. For each visible atomic item, include all three elements:
   what it says, why it happens, and what it means for bedside nursing action.
7. Add a tooltip to each atomic visual item and set tooltip text to the exact matching script sentence(s) for that item.
8. Confirm that every visible atomic item on the slide has both explicit script coverage and a tooltip.
9. Keep the script as prose that can be read aloud naturally.

Tooltip implementation standard for this project:
- Use DaisyUI tooltip pattern with tooltip classes and data-tip content.
- Wrap the smallest practical element (atomic-level text node or value) so hover/focus shows only that item's script excerpt.
- Keep tooltip text concise but complete enough to preserve the nursing reasoning statement.
- If one sentence covers multiple adjacent atomic items, split into separate tooltip excerpts per item instead of reusing a generic tooltip.

---

## Non-Negotiable Coverage Rule

If an item appears on the slide, it must be discussed in the script.
If an atomic item appears on the slide, it must have a tooltip containing the relevant script excerpt.

Do not skip:
- warning alerts
- table rows
- table headers and key cell values
- footnote caveats
- checklist items
- step sequences
- secondary cards
- card headings and bullet lines
- stat labels and stat values

No selective narration.
No selective tooltip mapping.

---

## Voice and Teaching Style

Write as an expert nursing pharmacology lecturer speaking to novice nursing students.

Use student-directed language:
- you
- your patient
- at the bedside
- as the nurse, you are watching for

Use plain language first, then technical term with immediate explanation.

Explain mechanism in direct clinical context, not in abstract textbook style.

---

## Script Construction Rules

1. Speak in complete prose paragraphs, not bullets.
2. Keep sentence length controlled for oral delivery.
3. Use active voice and direct instructional phrasing.
4. Keep transitions explicit so listeners always know where to look on the slide.
5. End each major section with a transfer sentence that names the reasoning pattern students should reuse.

---

## Clinical Emphasis Rules

Every mechanism statement must be paired with nursing significance.

Every risk statement must include monitoring, intervention, or patient teaching.

Safety-critical content must be spoken more clearly and directly than non-critical content.

Prioritize:
- hemodynamic monitoring
- adverse effect detection
- escalation triggers
- interaction risks
- administration sequence errors
- patient teaching points

---

## Quality Checks Before Finalizing

1. Can a student reconstruct every visible slide element from the narration alone?
2. Does every visible atomic item have a tooltip with the correct script excerpt?
3. Is every table row discussed explicitly?
4. Is every alert and warning box discussed explicitly?
5. Does every mechanism include a nursing action or monitoring implication?
6. Is the script naturally speakable without awkward phrasing?
7. Does the script teach reasoning, not just repeat slide text?

If any answer is no, revise.

---

## Output Expectation

When updating scripts:
- Edit narrative content and add/update tooltip markup on slide elements so each atomic item maps to its script excerpt.
- Preserve existing slide layout and visual components.
- Keep instructional quality consistent across all lecture slides in the project.
