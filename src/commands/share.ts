import fs from "fs";
import path from "path";
import chalk from "chalk";
import simpleGit from "simple-git";
import { getRepoRoot } from "../core/git";

const git = simpleGit();

export async function shareCommand(options?: { stop?: boolean }) {
    try {
        const root = await getRepoRoot();
        const gitignorePath = path.join(root, ".gitignore");
        const devctxDir = path.join(root, ".contextmemory");

        if (!fs.existsSync(devctxDir)) {
            console.log(chalk.red("✗ DevContext not initialized. Run `contextmemory init` first."));
            return;
        }

        if (options?.stop) {
            // Add .contextmemory/ back to .gitignore
            const gitignoreContent = fs.existsSync(gitignorePath)
                ? fs.readFileSync(gitignorePath, "utf-8")
                : "";

            if (!gitignoreContent.includes(".contextmemory/")) {
                fs.appendFileSync(gitignorePath, "\n.contextmemory/\n");
            }

            console.log(chalk.green("✓ Stopped sharing DevContext"));
            console.log(chalk.gray("  .contextmemory/ added back to .gitignore"));
            console.log(
                chalk.gray("  Note: Existing .contextmemory/ files remain in git history.")
            );
            return;
        }

        // Remove .contextmemory/ from .gitignore
        if (fs.existsSync(gitignorePath)) {
            let content = fs.readFileSync(gitignorePath, "utf-8");
            content = content
                .split("\n")
                .filter(
                    (line) =>
                        line.trim() !== ".contextmemory/" &&
                        line.trim() !== ".contextmemory" &&
                        line.trim() !== "# DevContext - AI coding context"
                )
                .join("\n");
            fs.writeFileSync(gitignorePath, content);
        }

        // Stage .contextmemory/ and commit
        await git.add([".contextmemory/", ".gitignore"]);
        await git.commit("chore: share DevContext with team");

        console.log(chalk.green("✓ DevContext is now shared with your team!"));
        console.log(chalk.gray("  .contextmemory/ removed from .gitignore"));
        console.log(chalk.gray("  Committed: \"chore: share DevContext with team\""));
        console.log(chalk.gray("\n  Push to share: git push"));
        console.log(chalk.gray("  Stop sharing: contextmemory share --stop"));
    } catch (err: any) {
        console.log(chalk.red(`✗ Error: ${err.message}`));
    }
}
