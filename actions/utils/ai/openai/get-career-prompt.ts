import { NichePromptData } from "./get-business-niche-prompt";

export function getCareerPrompt(promptData: NichePromptData): string {
  return `Based on the following information, extract this person's skills, interests, values, driving belief, and identify their ideal career direction.

## RAW INPUTS

**Activities that make them lose track of time:**
${promptData.loseTrackOfTimeAreas.join("\n")}

**What they loved doing at age 10:**
${promptData.lovedDoingAt10.join("\n")}

**Issues that would make them lose sleep:**
${promptData.issuesSpokenUpAbout.join("\n")}

**What they're naturally curious about:**
${promptData.naturallyCuriousAbout.join("\n")}

**Activities that feel like play:**
${promptData.feelsLikePlay.join("\n")}

**Topics they continuously explore:**
${promptData.continuouslyLearningAbout.join("\n")}

**Some things they've helped others with:**
${promptData.helpedOthersWith.join("\n")}


**Things that they find difficult, but is necessary for their growth:**
${promptData.areasNeededHelp.join("\n")}

**Something they wish more people understood:**
${promptData.wishMoreUnderstood}

**What they're here to do in life:**
${promptData.hereToDo}

**A turning point in their life:**
${promptData.turningPoint}

**3 rules they'd give their 18-year-old self:**
${promptData.unspokenRules.join("\n")}

---

## YOUR TASK

Extract and generate:

1. **Skills**: What are they actually good at? (based on what they do, learn, and lose track of time doing)

2. **Interests**: What topics/areas are they drawn to? (based on curiosity, play, and continuous learning)

3. **Core Values**: Convert their 3 rules into 3 single-word values (e.g., Independence, Truth, Growth, Courage, Resilience, Curiosity)

4. **Driving Belief**: Convert "something they wish more people understood" into format: "[Topic] is really about [their insight], not [common misconception]"

5. **Career Direction**: What type of work are they best suited for?
   - Statement format: "You're best suited for [TYPE OF WORK] because [REASON based on their profile]"
   - Why You: Connect their story, turning point, and natural abilities to why this direction fits

6. **Role Recommendations**: 3-5 specific job roles that fit them, with details on industry, salary, skill gaps, and target companies

Be specific to THIS person. No generic advice.`;
}
