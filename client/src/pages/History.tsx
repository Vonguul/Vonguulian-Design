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
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h4 className="font-bold text-primary mb-3">Core Philosophy: Black Nationalism and Self-Defense "By Any Means Necessary"</h4>
                <p className="text-muted-foreground">
                  Malcolm X represented a fundamentally different approach to Black liberation, emphasizing self-reliance, pride in Black identity, and the right to self-defense without apology.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
