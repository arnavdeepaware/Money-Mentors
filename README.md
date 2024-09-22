## Inspiration
###Reimagining Credit Worthiness: A Path to Financial Empowerment
In the world of finance, credit scores have long reigned supreme as the gatekeepers of borrowing potential. Yet, this system, dominated by FICO scores, often falls short in truly capturing an individual's financial reliability. Many consumers find themselves navigating a complex landscape they barely understand, where seemingly minor factors can have outsized impacts on their financial futures.
###The FICO Dilemma
The current credit scoring system, while widely used, is far from perfect. It can unfairly penalize individuals based on factors beyond their immediate control, such as:
length of credit history,
limited record of loan repayments and
lack of diverse credit types.
This predicament is particularly challenging for younger borrowers. They often find themselves caught in a frustrating cycle: needing credit to build a history, but unable to access credit without that very history.
###A Vision for Change
What if we could break free from these constraints? Imagine a world where financial creditworthiness is judged more holistically, taking into account the full spectrum of an individual's financial behavior and potential. This new approach could:
open doors for deserving borrowers previously overlooked,
provide life-changing loans to those who need them most and
offer banks access to a wider pool of reliable consumers.
###Empowering The Next Generation
By rethinking our approach to credit assessment, we have the power to transform lives. We can create a system that
rewards financial responsibility in all its forms;
breaks down barriers to economic opportunity;
educates and empowers consumers to take control of their financial futures.
The time has come to move beyond the limitations of traditional credit scoring. By embracing innovation and a more nuanced understanding of financial health, we can build a fairer, more inclusive financial system that works for everyone. Let's unlock the potential of millions of creditworthy individuals and pave the way for a brighter economic future.
## What it does
Our app teaches users personal finance topics with the longer term goal of helping them build great financial habits that enhance their credibility profile to lenders.  
## How we built it
Our front end is built with HTML and CSS. To ensure that we have an endless supply of fresh content for our users, we implemented the Cerebras API using python to allow on-demand generation of personal finance questions, answers and explanations.  
## Challenges we ran into
We had an ambitious plan for the short amount of time this weekend and managed to complete the first few stages of our roadmap.  
###1. Access to data 
We initially wanted to gain access to datasets that contain anonymized consumer lending data that includes consumer attributes like age, education level, loan repayment results, etc. in an attempt to extract insights (i.e. correlation between higher education and actual default rates vs. assumed credit worthiness based on traditional FICO score system). 
###2. Integration with banking partners
We want to be able to integrate the banking details of our users into the app - the idea is for users to learn great financial management skills like opening up checking and savings account early, paying down debt, automatic savings, etc. and for users to be able to take those learnings and act directly in their own accounts. This will not only give banking partners an incentive to cooperate with us, but will also enable lenders to gain credible visibility into the healthy financial habit building from our users. We realize that this type of deep integration required partnerships with third parties like Plaid and also involved more sensitive and regulated data that we are not prepared to handle over the course of a weekend. 
###3. Structuring our Application 
As first time hackathon participants and beginner coders, we had to figure out many basic things in building the application.  Some of the things we learned along the way are: how to integrate with the Cerebras API, Build a clean and user friendly web app front end with HTML & CSS, mange our collaboration amongst three contributors, etc.  We also attempted to build a full stack structure (instead of front end, then backend) using Nextjs, React, Drizzle and Stripe to allow for a more straight forward future integration with a database to store user progress, but that will take a little longer and is next up on our product roadmap. 
## Accomplishments that we're proud of
1. This is our very first build, so anything functional feels like magic!
2. Coming together and mapping out an idea that all three of us (we just met!) are excited about.
3. Integrating Cerebras API in our app
4. Interactive App that attempts to address a real pain point that affects many

##What we learned
Starting with a clear and simple roadmap with the intention of sticking to it saves time. We were not experienced enough to understand how complex some of the features in our original design were and had started out with a plan that was slightly too ambitious for just 36 hours. We feel great about the learning process and understanding what we didn't know going into the project. Armed with our many many failed experiments, we can now confidently spend time on learning and practicing each piece of skills we need for our original project plan. 

##What's next for MoneyMentor
Adding more educational, interactive content to our app and creating social components like allowing users to invite and add friends with a weekly score board.  Learning topics on personal finance practices and taking corresponding actions in the real world will earn users points and reinforce the learning cycle. We want to be able to add the banking APIs and eventually gain access to anonymized loan data that will allow us to benchmark the credit worthiness of our users to those scored by the traditional credit model.  Over time we should be able to build credibility with lenders and provide them with data that incentivize lending to a new cohort of credit worthy individuals that deserve a chance. 
