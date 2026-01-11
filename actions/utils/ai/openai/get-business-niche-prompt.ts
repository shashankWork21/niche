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
  const prompt = `Analyze the following responses and identify this person's ideal business niche.

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

**Topics they continuously learn about:**
${promptData.continuouslyLearningAbout.join("\n")}

**Some things they've helped others with:**
${promptData.helpedOthersWith.join("\n")}

**Things that they find difficult, but is necessary for their growth:**
${promptData.areasNeededHelp.join("\n")}

**Something they wish more people understood:**
${promptData.wishMoreUnderstood}

**According to them, what they're here to do in life:**
${promptData.hereToDo}

**A turning point in their life:**
${promptData.turningPoint}

**3 rules they'd give their 18-year-old self:**
${promptData.unspokenRules.join("\n")}`;

  console.log("Generated Niche Prompt:", prompt);
  return prompt;
}
