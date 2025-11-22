import { useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";

export default function History() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">History in the Making</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* X-Factor */}
          <section data-testid="section-history-xfactor">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">X-Factor</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Maybe except for the tech section, many of the concepts and ideas that Vonguul promotes have been attempted before, and the question becomes what is Vonguul doing different? What is the secret sauce that we bring to the table?
              </p>

              <p>
                Respect to our predecessors, our X-Factor comes from the abundant history we have of their accolades, their victories and challenges faced. With that history we can learn from what worked, what didn't work, and how we can go further this time. From Malcolm X and Martin Luther King Jr to Huey P Newton and Bobby Seale. We are talking about civil rights movements, self defense initiatives, and community outreach programs. We are talking about equipping ourselves with the adequate amount of knowledge needed, to justify the necessary amount of action we will be required to apply.
              </p>

              <p>
                We are not creating a new black panther party, we are bringing Vonguul to the forefront of activism for the betterment of our collective. Where others choose to protest and boycott, we have chosen to draw a clear distinction between us and them. Infiltration and betrayal have been key factors keeping us from our full potential, and we can't depend on what our physical eyes see to determine who our allies and opponents are.
              </p>

              <p>
                We have had the blueprint for a while, and all we need is the right plan to navigate the obstacles we will face. I can't in good conscious, give all the details of what our X-Factor is, but what I can do is share a bit of history that, though we won't reenact, we have drawn inspiration from.
              </p>
            </div>

            {/* Black Panther Party */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – Black Panther Party</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Foundation & Context</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The party was founded in October 1966 in Oakland, California, by two young activists, Huey P. Newton and Bobby Seale. They met while they were students at Merritt College.
                  </p>
                  <p>
                    <strong>The Context:</strong> By the mid-1960s, the Civil Rights Movement had achieved major legislative victories like the Civil Rights Act of 1964 and the Voting Rights Act of 1965. However, for many Black Americans in urban centers like Oakland, these legal changes did not translate into an improved daily reality. They still faced rampant poverty, substandard housing, unemployment, and, most critically, frequent and often violent harassment by the police.
                  </p>
                  <p>
                    <strong>Influence of Malcolm X:</strong> Newton and Seale were deeply influenced by the more radical teachings of Malcolm X, who had advocated for Black self-defense, self-determination, and Black nationalism, in contrast to the non-violent approach of Dr. Martin Luther King Jr.
                  </p>
                  <p>
                    <strong>The Catalyst – Police Brutality:</strong> The immediate catalyst for the party's formation was the killing of an unarmed 16-year-old Black youth, Matthew Johnson, by Oakland police in July 1966. The shooting sparked days of protests and unrest in the city. For Newton and Seale, this event was the final proof that the system was not going to protect Black people and that they had to protect themselves.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Founding Strategy & Armed Citizen Patrols</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Newton and Seale drafted the Ten-Point Program, which outlined the party's goals and demands. It called for things like freedom, full employment, decent housing, education that taught Black history, and an immediate end to police brutality and the murder of Black people.
                  </p>
                  <p>
                    <strong>The First and Most Famous Action:</strong> Their first major action was the creation of armed citizen patrols to monitor the Oakland Police Department.
                  </p>
                  <p>
                    <strong>How It Worked:</strong> Panther members, who were legally armed, would follow police cars at a safe distance. When the police stopped a Black civilian, the Panthers would emerge from their cars, stand at a legal distance with their shotguns (often slung over their shoulders), and observe the interaction to ensure no brutality occurred.
                  </p>
                  <p>
                    <strong>The Impact:</strong> This tactic was revolutionary. It was a direct, visible challenge to police authority and empowered the local Black community. The image of armed, disciplined Black Panthers in leather jackets and berets standing up to the police quickly gained national attention.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Evolution Beyond Self-Defense</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>The Name:</strong> The name "Black Panther" was chosen because it was powerful and symbolized strength. It was inspired by the Lowndes County Freedom Organization (LCFO) in Alabama, an independent Black political party that had adopted a black panther as its mascot for the 1966 elections. Newton and Seale adopted the symbol and the name for their new organization.
                  </p>
                  <p>
                    While initially focused on armed self-defense, the party quickly evolved. They recognized that true liberation also required meeting the community's immediate needs. This led to the creation of over 60 "Survival Programs," the most famous of which was the Free Breakfast for Children Program. Other programs included free health clinics, food drives, legal aid, and clothing drives.
                  </p>
                  <p>
                    <strong>In Summary:</strong> They combined militant self-defense with community-based social programs, creating a model of Black empowerment that was both revolutionary and practical.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The Fall - External & Internal Pressures</h4>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h5 className="font-semibold text-primary mb-3">External Pressure: The FBI's COINTELPRO Program</h5>
                    <p className="mb-3">
                      The single most significant external factor for the Black Panther Party's fall was the FBI's covert and illegal COINTELPRO (Counterintelligence Program). Directed by J. Edgar Hoover, the FBI declared the Black Panther Party "the greatest threat to the internal security of the country" and set out to "neutralize" it by any means necessary.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Psychological Warfare:</strong> The FBI forged letters, spread false rumors in the media, and sent anonymous pamphlets to create paranoia and distrust within the party. They would forge letters between members to make it seem like others were planning to betray them.</p>
                      <p><strong>Instigating Violence:</strong> A primary goal was to pit the Panthers against other Black nationalist groups. The FBI's most successful and deadly operation was instigating a feud between the Black Panthers and a rival group called the US Organization, leading to a series of deadly shootouts on both sides.</p>
                      <p><strong>Illegal Surveillance and Harassment:</strong> The FBI wiretapped phones, bugged homes, and conducted illegal break-ins to gather intelligence. They worked with local police to arrest Panther members on flimsy charges, draining the party's resources with legal fees.</p>
                      <p><strong>Direct Violence and Extrajudicial Killings:</strong> COINTELPRO's tactics culminated in direct police violence. The most infamous example is the 1969 Chicago police raid that resulted in the assassination of Fred Hampton, a charismatic and highly effective Black Panther Party leader, while he was asleep in his bed. The raid was guided by an FBI informant who had drugged Hampton's guard.</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary mb-3">Internal Conflicts and Ideological Splits</h5>
                    <p className="mb-3">
                      While the government's assault was relentless, the party was also tearing itself apart from within.
                    </p>
                    <p className="mb-3"><strong>Factionalism:</strong> A major ideological rift developed between the party's leadership in Oakland and the more militant, internationalist faction that had developed, largely around Eldridge Cleaver, who was in exile in Algeria.</p>
                    <ul className="list-disc list-inside space-y-2 mb-3">
                      <li><strong>The Oakland Faction (led by Huey Newton):</strong> After his release from prison in 1970, Newton began to emphasize community programs ("Survival Programs") over armed confrontation.</li>
                      <li><strong>The "Revolutionary" Faction (led by Cleaver):</strong> Cleaver and his followers advocated for a more immediate, violent, urban guerrilla warfare strategy.</li>
                    </ul>
                    <p className="mb-3">This split led to purges, expulsions, and even violent clashes between former comrades, severely weakening the party's unity.</p>
                    <p className="mb-3"><strong>Leadership Issues:</strong> As the party faced increasing pressure, Huey Newton's leadership became more autocratic and erratic. He developed a deep paranoia, fueled by COINTELPRO's psychological warfare and his own drug use. He ordered purges of members he suspected of disloyalty, and some of his enforcers were accused of torture and murder within the party. This created a climate of fear and alienated many dedicated members.</p>
                    <p><strong>Criminal Activity:</strong> While the party's official mission was community service, some members and chapters became involved in criminal activities like extortion and drug dealing to raise money. This not only violated the party's principles but also tarnished its public image and gave the government a pretext for its crackdown.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Final Years and Dissolution</h5>
                    <p className="mb-3">By the mid-1970s, the party was a shadow of its former self.</p>
                    <div className="space-y-2">
                      <p><strong>Legal Battles:</strong> Defending members in court consumed enormous amounts of time and money. Resources that once went to the Free Breakfast for Children Program and free health clinics were diverted to legal fees.</p>
                      <p><strong>Military Confrontations:</strong> Repeated shootouts with police led to the deaths and arrests of key members, depleting the party's ranks and leadership. The focus shifted from building community to simple survival.</p>
                      <p><strong>Huey Newton's Decline:</strong> In 1974, facing murder charges, Newton fled to Cuba. He returned in 1977, but his problems with drug addiction and internal power struggles intensified.</p>
                      <p><strong>Elaine Brown's Leadership:</strong> In Newton's absence, Elaine Brown chaired the party. She focused on electoral politics and community programs but later left the party, disillusioned by the pervasive sexism and violence she encountered, particularly from Newton.</p>
                      <p><strong>Official Dissolution:</strong> The party's membership had dwindled, and its community programs had largely collapsed. In 1982, the Black Panther Party was officially dissolved.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <p className="text-muted-foreground mb-4">
                  <strong>In Conclusion:</strong> The Black Panther Party fell because the government's illegal and violent campaign of repression successfully exploited and amplified the party's own internal weaknesses in addition to creating new problems for their organization. The combination of external sabotage and internal decay proved too much for the organization to overcome, bringing a tragic end to one of the most complex and influential movements of the 20th century.
                </p>
                <p className="text-muted-foreground mb-4 italic">
                  History will be our best friend until we allow it to hold us back from our future. Failure can feel like the end of the world, but it is also the beginning of a new experience. The quicker we can process where we are in our plan, the quicker we can get to our next milestone.
                </p>
                <p className="text-muted-foreground">
                  Let's look at more history that we can learn from. It would be noteworthy to understand, we are not picky about the details and knowledge is knowledge. Any and everything that has been said or done, can and will be used for our benefit, as if it were prepared to defend itself in a court of law. The sentiment is to always aim for peace, when peace is difficult to maintain we still aim for peace, when peace can not be sustained, we choose life.
                </p>
              </div>
            </div>

            {/* Martin Luther King Jr */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – Martin Luther King Jr.</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Core Philosophy: Nonviolent Civil Disobedience</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>King was deeply influenced by his Christian faith and the teachings of Mahatma Gandhi.</li>
                      <li>He believed that nonviolence was not a sign of weakness but the most powerful weapon for an oppressed people.</li>
                      <li>The goal was to use love, passive resistance, and peaceful protest (marches, boycotts, sit-ins) to create a "constructive nonviolent tension" that would force society to confront its own injustice and appeal to the moral conscience of white America.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-3">Ultimate Goal: Integration and the "Beloved Community"</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>King envisioned a fully integrated, multiracial American society where people were judged by the "content of their character, not the color of their skin."</li>
                      <li>His dream was the "Beloved Community," a society based on justice, equal opportunity, and love of one's fellow human beings. He fought to dismantle segregation and bring Black and white people together.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-3">Key Organizations & Events</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Southern Christian Leadership Conference (SCLC):</strong> The organization he co-founded and led.</li>
                      <li><strong>Montgomery Bus Boycott (1955-1956):</strong> His first major leadership role.</li>
                      <li><strong>March on Washington (1963):</strong> Where he delivered his iconic "I Have a Dream" speech.</li>
                      <li><strong>Nobel Peace Prize (1964):</strong> Awarded for his nonviolent struggle against racial segregation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Malcolm X */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – Malcolm X</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Core Philosophy: Black Nationalism and Self-Defense "By Any Means Necessary"</h4>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>As the national spokesman for the Nation of Islam (NOI) for most of his public career, Malcolm advocated for Black political, economic, and social independence.</li>
                    <li>He was deeply critical of King's nonviolent approach, arguing that Black people had the right and responsibility to defend themselves "by any means necessary" against violent white aggression. He called it "intelligence" to protect oneself.</li>
                    <li>He preached Black pride, self-reliance, and was unafraid to identify the root of America's racial problem as systemic and institutional.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Ultimate Goal: Separation and Independence (Early Years)</h4>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Initially, Malcolm and the NOI did not seek integration. They believed it was impossible and undesirable. Instead, they advocated for a separate Black nation or state in America.</li>
                    <li>He viewed white people as a collective enemy and was highly skeptical of their ability to ever grant true freedom and equality to Black people.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-4">Key Organizations & Events</h4>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Nation of Islam (NOI):</strong> Where he rose to prominence.</li>
                    <li><strong>"The Ballot or the Bullet" Speech (1964):</strong> A powerful speech arguing for Black political empowerment and self-defense.</li>
                    <li><strong>Autobiography of Malcolm X:</strong> A seminal book that detailed his life and evolving philosophy.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MLK vs Malcolm X Comparison */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – MLK Jr vs Malcolm X</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8 overflow-x-auto">
                <table className="w-full text-muted-foreground text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <th className="text-left py-3 px-2 font-bold text-primary">Feature</th>
                      <th className="text-left py-3 px-2 font-bold text-primary">Martin Luther King Jr.</th>
                      <th className="text-left py-3 px-2 font-bold text-primary">Malcolm X</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2 font-semibold">Philosophy</td>
                      <td className="py-3 px-2">Nonviolent Civil Disobedience</td>
                      <td className="py-3 px-2">Self-Defense "By Any Means Necessary"</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2 font-semibold">Goal</td>
                      <td className="py-3 px-2">Integration into a multiracial society</td>
                      <td className="py-3 px-2">Black Nationalism, Separation (initially)</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2 font-semibold">View of Whites</td>
                      <td className="py-3 px-2">Saw potential for allies and change</td>
                      <td className="py-3 px-2">Viewed as the historical oppressor</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2 font-semibold">Religious Influence</td>
                      <td className="py-3 px-2">Protestant Christianity</td>
                      <td className="py-3 px-2">Nation of Islam (later Sunni Islam)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">Primary Base</td>
                      <td className="py-3 px-2">The Black church and the rural South</td>
                      <td className="py-3 px-2">Urban youth and Northern ghettos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Malcolm X's Transformation</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    After leaving the Nation of Islam in 1964, Malcolm made the Hajj pilgrimage to Mecca. There, he saw Muslims of all colors—white, Black, brown—praying and living together as equals. This experience shattered his belief that all white people were inherently evil. He returned to America with a new, more inclusive outlook. He began to speak of international human rights and expressed a willingness to work with other civil rights leaders, including Dr. King. He was no longer strictly a separatist but a revolutionary humanist.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-4">Martin Luther King Jr.'s Radicalization</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In his final years, King also became more radical. He saw that passing laws wasn't enough. He began to connect racism with economic inequality and launched the Poor People's Campaign, a multiracial coalition to fight poverty. He also became one of the most prominent opponents of the Vietnam War, understanding that militarism abroad was linked to violence and poverty at home. He was moving from a focus on civil rights to a broader critique of the entire American system.
                  </p>
                </div>
              </div>
            </div>

            {/* The Venus Project */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – The Venus Project</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">What is The Venus Project?</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Venus Project is an organization founded by Jacque Fresco (1916-2017), a self-taught industrial designer, social engineer, and futurist. It operates as a research and educational center located in Venus, Florida.
                  </p>
                  <p>
                    At its core, The Venus Project advocates for a Resource-Based Economy (RBE). This is the central pillar of its philosophy.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The Core Concept: A Resource-Based Economy (RBE)</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    An RBE is a system where all goods and services are available to everyone without the use of money, credit, barter, or any form of debt or servitude. Instead of being driven by profit, the economy is managed by the automated monitoring of the planet's resources.
                  </p>
                  <p className="font-semibold mb-2">Key features of an RBE include:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>No Money or Property:</strong> Money, credit, and the concept of private property (as we know it) are eliminated. Instead, the world's resources are declared the common heritage of all people.</li>
                    <li><strong>Automation and Cybernation:</strong> The majority of labor, including mundane and dangerous jobs, is automated. This frees humanity from repetitive toil and allows for a higher standard of living for everyone.</li>
                    <li><strong>Scientific Management of Resources:</strong> A centralized, AI-driven system would survey the planet's resources (minerals, water, energy, etc.) and manage their use in the most sustainable and efficient way possible. Decisions are not made by politicians or corporations, but by scientific data and the carrying capacity of the Earth.</li>
                    <li><strong>Focus on Needs, Not Wants:</strong> The system's primary goal is to meet the needs of every human being—clean air, water, food, housing, healthcare, and education—while preserving the environment.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-4">What Would a Venus Project Society Look Like?</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fresco and his team spent decades designing detailed models and blueprints of what this future would look like.
                  </p>
                  <ul className="list-disc list-inside space-y-3">
                    <li><strong>Circular Cities:</strong> The vision involves building entirely new, self-sufficient cities designed in a circular pattern. This layout minimizes waste and transportation needs. The cities would be divided into different zones: Central Dome (for social, cultural, and educational activities), Agricultural Belt (for hydroponic and aeroponic food production), Residential Zone (housing integrated with parks and natural landscapes), and Energy Belt (using clean, renewable sources like solar, wind, and geothermal power).</li>
                    <li><strong>Transportation:</strong> Fully automated, electric vehicles and high-speed maglev trains would provide seamless, integrated public transportation, eliminating the need for private cars.</li>
                    <li><strong>Daily Life:</strong> With automation handling production and resource management, people would be free to pursue their interests—science, art, education, exploration, and social relationships. The emphasis would shift from "jobs" and "careers" to lifelong learning and contribution.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Black Wallstreet */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – Black Wallstreet</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The Rise: A Self-Sufficient African American Community</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In the early 20th century, Tulsa's Greenwood District was a thriving, self-sufficient African American community. Following the oil boom in Oklahoma, the city was booming, and segregation laws forced Black residents to create their own economic ecosystem. This segregation, born of oppression, ironically became the foundation for Black prosperity.
                  </p>
                  <p className="font-semibold mb-2">What made it so successful?</p>
                  <ul className="list-disc list-inside space-y-3">
                    <li><strong>Self-Reliance:</strong> The community had its own everything. Black dollars were spent at Black-owned businesses and circulated within the community dozens of times before leaving.</li>
                    <li><strong>Entrepreneurial Spirit:</strong> The district was home to over 300 Black-owned businesses, including: Financial Institutions (two Black-owned banks, including the nation's largest, the Dollar Savings Bank), Retail (grocery stores, clothing shops, jewelry stores, and funeral homes), Services (law offices, doctor's offices, a modern hospital, and a library), Media (two newspapers, including the Tulsa Star), and Entertainment (hotels, theaters, and a famous jazz scene).</li>
                    <li><strong>Education and Wealth:</strong> The community had a high rate of Black homeownership and a strong school system. It was a place of immense Black pride, intellectual achievement, and wealth. The famous educator Booker T. Washington visited and reportedly called it the "Negro Wall Street of America."</li>
                  </ul>
                  <p className="mt-4">
                    Greenwood was a testament to what was possible in a deeply segregated nation. It was a safe, prosperous, and vibrant community where Black families could build a life of dignity and success.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The Fall: The Tulsa Race Massacre (31 Hours of Terror)</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    On May 31 and June 1, 1921, the entire community was decimated in one of the worst acts of racial violence in American history.
                  </p>
                  <p className="font-semibold mb-2">The Catalyst:</p>
                  <p>
                    The violence was sparked by a rumor. A young Black man named Dick Rowland tripped and fell in an elevator, accidentally brushing against the white elevator operator, Sarah Page. A clerk who witnessed the fall misconstrued the event as an assault. The next day, the Tulsa Tribune ran a sensational, inflammatory front-page story titled "Nab Negro for Attacking Girl in an Elevator."
                  </p>
                  <p className="font-semibold mb-2 mt-4">The Escalation:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Confrontation at the Courthouse:</strong> An angry white mob gathered outside the courthouse, intent on lynching Rowland. A group of Black men from Greenwood, many of whom were World War I veterans, went to the courthouse armed and offered to help the sheriff protect Rowland.</li>
                    <li><strong>The Shot Heard 'Round the Courthouse:</strong> In the chaos that evening, a white man tried to disarm a Black veteran. A shot was fired, and the mob descended on the outnumbered Black men, chasing them back toward Greenwood.</li>
                    <li><strong>The Invasion:</strong> The white mob, now numbering in the thousands and deputized by city officials, swarmed into the Greenwood District. They were given weapons and ammunition, looting homes and businesses, setting them on fire one by one.</li>
                    <li><strong>Aerial Attack:</strong> In a horrifying and unprecedented act, private planes were used to drop turpentine bombs and firebombs from the sky, making the Tulsa Race Massacre the first and only time American citizens have been aerially bombed on U.S. soil by their fellow citizens.</li>
                    <li><strong>Systematic Murder:</strong> People were shot in their homes, in the streets, and as they tried to flee. The violence was not random; it was a coordinated, systematic destruction of an entire community.</li>
                  </ol>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-4">The Aftermath and Legacy</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-semibold mb-2">The Cover-Up:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>The Cost:</strong> The official death toll at the time was 36 (10 white and 26 Black). Modern historians estimate the true number is between 100 and 300 people, with the vast majority of victims being Black.</li>
                    <li><strong>Economic Devastation:</strong> Over 35 square blocks were destroyed. More than 1,250 homes were burned, leaving nearly 9,000 people homeless. Over 200 businesses were destroyed, and the economic loss would be worth over $30 million today (over $400 million adjusted for inflation).</li>
                    <li><strong>Systematic Erasure:</strong> In the days that followed, no white person was ever prosecuted for the violence. Instead, city officials blamed the Black community. For decades, the massacre was systematically erased from history books and public conversation. Survivors were terrorized into silence.</li>
                  </ul>
                  <p className="font-semibold mb-2 mt-4">Modern Efforts:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>In 1997, the Tulsa Race Riot Commission was formed to investigate the massacre. Their final report confirmed the city's complicity and recommended reparations for survivors and their descendants.</li>
                    <li>Greenwood Rising: A state-of-the-art history center was built in 2021 on the centennial of the massacre to tell the story of Greenwood's rise, fall, and resilience.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gaddafi */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – History – Gaddafi</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">Rise to Power</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Gaddafi was born in 1942 near Sirte, Libya, to a Bedouin family. He was a fervent Arab nationalist and admired Egyptian President Gamal Abdel Nasser. While a young army officer, he formed the Free Officers Movement, a secret group of revolutionaries dedicated to overthrowing the pro-Western monarchy of King Idris I.
                  </p>
                  <p>
                    On September 1, 1969, Gaddafi and his men launched a nearly bloodless coup while the king was abroad for medical treatment. He was just 27 years old. The coup was popular, as many Libyans felt the monarchy had benefited from the nation's oil wealth while leaving the general population poor.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The "Jamahiriya" and The Green Book</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Gaddafi rejected traditional systems of democracy and monarchy. Instead, he created his own unique political system outlined in his three-volume collection, The Green Book.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><strong>Jamahiriya:</strong> In 1977, he declared Libya a "Jamahiriya," which translates to "state of the masses." In theory, this was a direct democracy governed by local people's councils. It was an autocracy where all power was concentrated in Gaddafi's hands. He held no official title, styling himself as a "Brotherly Leader and Guide of the Revolution."</li>
                    <li><strong>The Green Book:</strong> This book was his political manifesto, critiquing Western democracy and communism while proposing his "Third Universal Theory." It was mandatory reading in Libyan schools and was the basis for the country's laws, though its ideas were often bizarre and impractical.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">42 Years of Paradox: Gaddafi's Rule</h4>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h5 className="font-semibold text-primary mb-3">The "Positive" Side (as promoted by his regime)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Social Welfare:</strong> Using Libya's vast oil wealth, Gaddafi invested heavily in social programs. He introduced free education and free healthcare, dramatically raising literacy rates and life expectancy.</li>
                      <li><strong>Infrastructure:</strong> He initiated massive infrastructure projects, the most famous of which is the Great Man-Made River Project, an enormous network of pipes that pumps fossil water from aquifers deep in the desert to coastal cities.</li>
                      <li><strong>Women's Rights:</strong> Compared to many other Arab nations, Gaddafi promoted women's rights. Women were encouraged to pursue education and join the workforce. He famously employed an all-female contingent of elite bodyguards.</li>
                      <li><strong>Anti-Imperialism:</strong> He was a staunch opponent of Western influence and colonialism, which earned him respect in some parts of the developing world.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary mb-3">The Dark Side (The Dictatorship)</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Brutal Repression:</strong> There was no political freedom or freedom of speech. Dissent was crushed mercilessly. Political opponents were tortured, imprisoned, or killed. Public executions were common.</li>
                      <li><strong>Cult of Personality:</strong> Gaddafi built an immense cult of personality around himself. His portrait was everywhere, and his speeches were broadcast for hours on state television.</li>
                      <li><strong>State-Sponsored Terrorism:</strong> For years, Libya was designated a state sponsor of terrorism. The most notorious example was the 1988 Lockerbie bombing, where a Pan Am flight was blown up over Scotland, killing 270 people. A Libyan intelligence agent was eventually convicted.</li>
                      <li><strong>Corruption and Nepotism:</strong> While the country had oil wealth, it was controlled by Gaddafi, his family, and his inner circle, leading to widespread corruption.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">International Relations: Pariah to Partner and Back</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-semibold mb-2">Gaddafi's relationship with the world was volatile.</p>
                  <ul className="list-disc list-inside space-y-3">
                    <li><strong>Pariah State (1980s-1990s):</strong> After the Lockerbie bombing and other terrorist acts, Libya faced international sanctions and isolation. In 1986, the U.S. bombed Tripoli and Benghazi to kill Gaddafi, which failed.</li>
                    <li><strong>Rehabilitation (2000s):</strong> In a dramatic turnaround, Gaddafi sought to end his isolation. He accepted responsibility for Lockerbie, dismantled his weapons of mass destruction programs, and shared intelligence with the West on terrorist groups. Leaders like Tony Blair, Silvio Berlusconi, and Condoleezza Rice visited Libya, and the country was welcomed back into the international community.</li>
                  </ul>
                  <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-4 mt-4">
                    <p className="italic text-sm">
                      This is very important to take notice of, and to also remember that the victors write the history books, a fundamental flaw in the current approach to history. Even if you surrender, you will still be considered a threat to be removed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
                <h4 className="font-bold text-primary mb-4">The Fall</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In February 2011, inspired by the Arab Spring uprisings in Tunisia and Egypt, protests broke out in Libya. Gaddafi's response was swift and brutal, vowing to hunt down the protesters "door to door" and "show no mercy."
                  </p>
                  <p>
                    This triggered a full-blown civil war. The United Nations authorized a no-fly zone to protect civilians, which was enforced by a NATO-led coalition. The intervention quickly expanded to active air support for the rebel forces.
                  </p>
                  <p>
                    After months of fierce fighting, rebel forces captured the capital, Tripoli, in August 2011. On October 20, 2011, Gaddafi was captured, brutally beaten, and killed by rebels in his hometown of Sirte. His final moments were filmed on a cell phone and broadcast globally.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-4">Legacy and the Aftermath</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Gaddafi left behind a deeply divided country with no functioning political institutions. His removal created a power vacuum that Libya has never recovered from. The country has been in a state of near-constant civil war, plagued by rival governments, Islamist militias, and human trafficking.
                  </p>
                  <p className="font-semibold mb-2">His legacy is intensely debated:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>To his supporters, he was a revolutionary hero who stood up to the West and lifted Libya out of poverty.</li>
                    <li>To his detractors, he was a cruel, eccentric tyrant who murdered his own people and ruled through fear.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* X-Factor Summary */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">X-Factor – Summary</h3>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 space-y-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Vonguul's X-Factor isn't intended to be surmised as just history. For those who know me and how I operate, know that I am especially skilled at reverse engineering information. With such a large database of different ideas, experiences, and outcomes, creating a system that works for us isn't a fantasy story. This is not a dream, this is not a myth, we may not be able to present ourselves to our full potential today, but with consistent focused effort towards an effective goal we can exceed the expectations of our potential.
                  </p>
                  <p>
                    No more begging, no more scamming, no more losing a winnable battle, no more thinking that big bro loves you, no more hiding the fact that the world we live in is ugly, no more expecting that the government can be trusted.
                  </p>
                  <p className="font-bold text-primary italic">
                    God said this is disgusting and somebody has to clean it up.
                  </p>
                </div>

                <div className="border-t border-black/10 dark:border-white/10 pt-6">
                  <h4 className="font-bold text-primary mb-4">Actionable Next Steps</h4>
                  <p className="text-sm mb-6">Begin your journey with our organization through these strategic pathways to exponential growth</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-3">Purchase Services</h5>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Explore our service catalog</li>
                        <li>Select the options that align with your goals</li>
                        <li>Complete any necessary forms</li>
                        <li>Schedule your personalized growth consultation (if needed)</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4">
                      <h5 className="font-bold text-primary mb-3">Join Community</h5>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Attend an introductory session to experience our approach</li>
                        <li>Connect with us via Patreon or Discord for updates</li>
                        <li>Participate in projects that showcase value</li>
                        <li>Contribute to our commitment with a donation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
