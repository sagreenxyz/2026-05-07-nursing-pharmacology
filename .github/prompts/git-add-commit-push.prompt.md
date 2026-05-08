---
mode: agent
description: Stage all changes, generate a strict Conventional Commit message, commit, and push.
---

Stage every tracked and untracked file, generate a meaningful Conventional Commit message from staged changes, commit, and push.

Execute this workflow exactly:

1. Confirm repository and branch context.
   - Get current branch name.
   - Confirm `origin` remote exists.

2. Stage all changes.
   - Run: `git add -A`

3. Verify there is content to commit.
   - Run: `git diff --cached --name-status`
   - If empty, stop and report: "No changes to commit."

4. Inspect staged changes and generate a Conventional Commit message.
   - Run:
     - `git diff --cached --stat`
     - `git diff --cached`
   - Build the commit message with this required structure:
     - Subject: `<type>(<optional-scope>): <summary>`
     - Blank line
     - Optional body: short bullet list of key changes when needed
     - Optional footer(s): e.g. `BREAKING CHANGE: ...`, `Refs: #123`
   - Allowed `type` values:
     - `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
   - Rules:
     - Subject uses imperative mood and is <= 72 chars when possible.
     - Message must reflect the actual diff, not generic text.
     - Include body when multiple files/areas changed or behavior changed.
     - Add `BREAKING CHANGE:` footer when APIs/contracts changed incompatibly.

5. Commit with the generated message.
   - Use multi-line commit text if body/footer is needed.

6. Push to remote.
   - First try: `git push`
   - If upstream is missing: `git push -u origin <current-branch>`

7. Report outcome.
   - Final commit message (full)
   - Commit hash
   - Branch name
   - Push/remote confirmation

Safety rules:

- Do not use `--amend` unless explicitly requested.
- Do not force push.
- Do not rewrite history.
- If push fails (auth, protected branch, divergence), report exact error and provide the next safe command.
