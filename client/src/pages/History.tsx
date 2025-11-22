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
          {/* Origin Story */}
          <section data-testid="section-history-origin">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">The Vonguulian Organized Nation – Origin Story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                We can't truly speak for anyone but ourselves. I was born in the USA but I am from Vonguul. The terms and conditions of my existence are not dictated by those that do not understand the weight of my purpose. I tried to be part of a whole, where I did not fit. I chose life when offered death. It is not my desire to impress upon anyone, anything other than what I stand for. I vow to create a man that is willing to live, than to suffer the slowest of deaths just because it is better than nothing. Nothing, another concept created to deceive you into thinking that is what you are. I vow to create a woman, that will create a child, that will know to be proud of the men we all support, because we support each other. Reciprocity isn't as difficult as some would have you believe.
              </p>
              <p>
                Vonguul came from all of us. It is the feeling we all get when we know something is not right, because we inherently know what right is supposed to be. It is the place we all desire to go when we're being wronged, because we know we won't be treated unfairly. When things don't make sense, no matter how we try to rationalize it. The safety in the trust we have for each other, because we know we choose our family. The bonds we built, with the people we trust, created the foundations we choose to stand on today.
              </p>
              <p>
                I think it makes perfect sense for us to finally build a metaphorical house, for our collective household. All flowers aside, regardless of what others do, we have to be responsible for us no matter what, because maybe it isn't better to concede our lives for their opportunity to die slow. "Their" is anyone that wants you to do what they want you to do and don't care about what you want. There are many names for these kinds of people, e.g. users, abusers, sociopaths, etc.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section data-testid="section-history-mission">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">The Vonguulian Organized Nation - Mission</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-2xl font-bold text-primary">Our Mission: It truly isn't something complicated, we simply want to progress. Whether that is with, or without the rest of humanity.</p>
              <p>
                Aren't you tired of politics treating your livelihood like it is a game or a disposable commodity that they have control of? Aren't you tired of religions lying to you about spirituality opting to instill fear in a mask of salvation? Aren't you tired of being sold a plate of poison at every store you're allowed to walk into? Aren't you tired of our children growing up confused and stressed out forced to rebel to feel normal? Aren't you tired of being tired of things that distract you from your purpose? I am.
              </p>
              <p>
                The thing about this entire process, is that this is the easiest and simplest part for everyone to agree on. We are all tired of some obvious injustice, but we refuse to agree on what to do about it, or it looks too confusing to be implemented. Most people that are willing to discuss the topic are only willing to complain about the problems, like this is supposed to be some kind of therapeutic vent session topic. If you offer solutions, they offer excuses, and the problem never gets fixed.
              </p>
              <p>
                I created a system where the only people that would complain about it would be the people that we are trying to avoid, the ones we always call "They" or "Them" no-trans. The people whose only desire is to use and abuse others for their own benefit or enjoyment.
              </p>
              <p className="font-semibold text-primary">
                And we have no place for them in Vonguul.
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section data-testid="section-history-introduction">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Introduction</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                This is a serious matter and should be treated as such, I am not here to flex on anyone about anything for any reason. It is my understanding that everyone has their role to play that was created specifically for them to do as they please. There should never be a time where we need to prove ourselves to anyone but us.
              </p>
              <p>
                We have a structure designed to empower and encourage our members to excel at every chance that they get. Providing an outlet to grow beyond their potential, becoming exceptional by all standards. Most people that will do something with the information I am sharing with you won't do it right, and I will still have to continue the execution.
              </p>
              <p>
                The plan only requires 1 sacrifice, most won't desire to be the first, but most also won't mind being second, because they will have had the opportunity to see the vision firsthand as a beneficiary.
              </p>
              <p className="font-bold text-primary">
                The plan is simple. We own profitable businesses and split the proceeds amongst our organized nation. That is the core of the plan. The rest is for longevity and sustainability. That's literally all there is to it.
              </p>
              <p className="italic">
                Let's talk about the details…
              </p>
            </div>
          </section>

          {/* Education */}
          <section data-testid="section-history-education">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                While anyone can tell you that innovation and change are what's needed in the education system today, not many will tell you how that change should look. With the Vonguulian approach to education, it is understood that teaching someone the fundamentals of a subject before teaching them how the information can be applied, left little opportunity for an individual to be restricted by the knowledge they received. This is something that can be applied to existing subjects such as Math, Science, Language Arts, and even History, which are the 4 basic topics present in most publicly provided school systems. Though we don't think we are going to be able to compare to public schools in the targeted demographic, we also don't think that education should stop with the base topics.
              </p>

              <p>
                This begs the question of how would we implement these principles into our organized nation's community. There are levels to understanding how these principles will be implemented:
              </p>

              <div className="space-y-4 ml-4 border-l-4 border-primary pl-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">First Level</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tutoring Classes for K-12 Subjects</li>
                    <li>Specialized Guidance Services</li>
                    <li>Webinars & Seminars</li>
                    <li>Workshops & Online Video Courses</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">Second Level</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Creating a targeted apprenticeship program</li>
                    <li>Focus on creating success from within</li>
                    <li>Providing resources to promising individuals</li>
                    <li>With guidance from approved leaders</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">Third Level</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Those that have gone through our courses receive recognition and certification</li>
                    <li>Creating our own network of credibility</li>
                    <li>Solving the issue of Entry Level Positions not being Entry Level by selecting from us first</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">Fourth Level</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Create our own private education institute that is publicly accredited</li>
                    <li>Admit the offspring of our members to ensure top quality education</li>
                    <li>Make sure their education is validated by public communities we still engage with</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">Fifth Level</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Create a University that allows our children to interact with other children in a safe and secure environment</li>
                    <li>Assured and enforced by us</li>
                    <li>Allows our ideologies to be spread to those that are not part of our organized nation</li>
                  </ul>
                </div>
              </div>

              <p>
                Every plan starts with the first step. With the plan for Vonguul, it is believed that education is the best starting point for us to progress to our desired destination. We do not wish for things, but we acknowledge that it would be nice to already be at the Third level at least, where we could offer benefits that feel tangible.
              </p>

              <p>
                We are where we are, and we will do what we can with what we have. If you think that our plan is worth supporting, the best way is to patronize our businesses and utilize our services to be ready for the day when Vonguul can be positioned to make reality what it should have been from the beginning.
              </p>

              <p>
                One day, it truly will be someone's beginning, but for today we have the Vonguulian Design Counseling Service along with Human Design information cheat sheets. Tomorrow, figuratively, we will have cheat sheets for more education subjects, but we will be focusing on providing the best quality we can achieve, so it may take time to create something for every subject in a timely manner. However, the better our businesses (We call these "mines" in Vonguul, because they are mining the currency of a nation) perform, the faster our progress will be.
              </p>

              <p>
                It was important to start with education and then give the details on the structure of Vonguul's Administration afterwards, because it should have set the precedence of creating a viable plan before creating an actionable plan. Where we currently are, we need a system that isn't designed to see us fail and give up, because we can't be mad at the person that does bad things for good reasons without being unfair.
              </p>
            </div>
          </section>

          {/* Vonguulian Administration */}
          <section data-testid="section-history-administration">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Vonguulian Administration</h2>

            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Organizational Structure</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Leadership Council</h4>
                  <p>Strategic decision-making body with representatives from all core divisions (Administration, Education, Health, Technology, and X-factor initiatives)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Divisional Teams</h4>
                  <p>Specialized groups focused on Administration, Education, Health, Technology, and X-factor initiatives</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Member Communities</h4>
                  <p>Regional and interest-based groups fostering collaboration, support, and mutual prosperity</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Checks & Balances</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Governance Framework:</strong> Clear accountability measures</li>
                <li><strong>Performance Metrics:</strong> Track organizational and member growth</li>
                <li><strong>Feedback Systems:</strong> Continuous improvement and member satisfaction</li>
                <li><strong>Member Protection:</strong> Protocols ensuring safety, well-being, and rights of all Vonguulians</li>
                <li><strong>Financial Transparency:</strong> Regular audits and open reporting on business performance and distribution</li>
              </ul>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-bold text-primary mb-3">Important Prerequisite</h3>
                <p>
                  Before we go too deep into how Vonguul operates, it is imperative that it is expressed that Vonguul is NOT for everyone, and not everyone is qualified to be a part of what we are creating. We do not care about your demographics; we care about your mindset. Do your views and values align with the views and values of Vonguul?
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-3">The Vonguulian Code of Conduct</h3>
                <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-6 space-y-2">
                  <p><strong>Code: LI 0 –</strong> In all things look for the Polarity</p>
                  <p><strong>Code: LI 1 –</strong> Do not impose yourself onto others, without their Consent</p>
                  <p><strong>Code: LI 2 –</strong> We do not Hope, We do not Pray, We Plan</p>
                  <p><strong>Code: LI 3 –</strong> We do not Fear, what we do not Understand</p>
                  <p><strong>Code: LI 4 –</strong> It is our Responsibility to Abstain from Ignorance</p>
                  <p><strong>Code: LI 5 –</strong> Right and Wrong are Subjective terms that Require Definition to be Determined</p>
                  <p><strong>Code: LI 6 –</strong> Plan to succeed in your endeavors, Always</p>
                  <p><strong>Code: LI 7 –</strong> Don't Assume, Research</p>
                  <p><strong>Code: LI 8 –</strong> Knowledge breeds Confidence and Confidence generates Power</p>
                  <p><strong>Code: LI 9 –</strong> Know your own Strengths and Weaknesses</p>
                </div>
                <p className="mt-4 italic">If you do not resonate with our Code, Vonguul probably isn't for you.</p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-3">Path to Vonguulian Status</h3>
                <p>
                  Let's assume you do resonate with our code of conduct, in order to be part of Vonguul, you would have to be invited by an existing member, and you would then have to pass 2 tests of character & mind. If you pass both tests, congratulations you become a Vonguulian with a Rank of 36.9 or Level 1 of 12. To increase your level, you would contribute to the organized nation in whatever way you deem compatible with your interests. The Rank tracks your progression based on your contributions and impact within the Vonguulian system.
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
