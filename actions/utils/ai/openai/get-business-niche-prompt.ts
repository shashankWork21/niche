export interface NichePromptData {
  loseTrackOfTimeAreas: string[];
  lovedDoingAt10: string[];
  issuesSpokenUpAbout: string[];
  naturallyCuriousAbout: string[];
  feelsLikePlay: string[];
  continuouslyLearningAbout: string[];
  helpedOthersWith: string[];
  areasNeededHelp: string[];
  wishMoreUnderstood: string;
  hereToDo: string;
  turningPoint: string;
  unspokenRules: string[];
}

export function getBusinessNichePrompt(promptData: NichePromptData): string {
  const prompt = `Based on the following information, extract this person's skills, interests, values, driving belief, and identify their ideal business niche.

## RAW INPUTS

**Activities that make them lose track of time:**
${promptData.loseTrackOfTimeAreas.join("\n")}

**What they loved doing at age 10:**
${promptData.lovedDoingAt10.join("\n")}

**Issues that they would address if they had all the money in the world:**
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

5. **Niche**: Who should they help, with what problem, for what result?
   - Statement format: "I help [SPECIFIC PERSON] who struggle with [SPECIFIC PROBLEM] to achieve [SPECIFIC RESULT]"
   - WhyYou: Connect their story, turning point, and skills to why THEY are the right person

6. **Customer Persona**: Detailed profile of their ideal customer.

7. **Niche Solutions**: 3-5 specific problems their customer faces and solutions they can offer (typed as PRODUCT or SERVICE)

Be specific to THIS person. No generic advice.`;

  console.log("Generated Niche Prompt:", prompt);
  return prompt;
}
