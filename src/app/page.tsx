"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Star, Rocket, Sparkles, Crown, Linkedin, Twitter, Github, Globe, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SaaS Pro"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Transform Your Workflow with SaaS Pro"
          description="The all-in-one platform designed to streamline your business processes and boost team productivity"
          tag="Next-Gen SaaS"
          tagIcon={Zap}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "View Demo", href: "features" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822276583-rcyia1ju.jpg", imageAlt: "SaaS dashboard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822277361-rnuprnk5.jpg", imageAlt: "Cloud computing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822278267-3fziyz4u.jpg", imageAlt: "Data analytics" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822278913-zhpntbwn.jpg", imageAlt: "Team collaboration" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822279645-0j48orzl.jpg", imageAlt: "Digital transformation" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822280356-ps786abe.jpg", imageAlt: "AI technology" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Built for Modern Teams"
          description={[
            "SaaS Pro is revolutionizing how teams collaborate and manage their workflows. With powerful automation, real-time synchronization, and enterprise-grade security, we empower businesses to focus on what matters most—growth and innovation."
          ]}
          metrics={[
            { label: "Active Users Worldwide", value: "50K+" },
            { label: "Enterprise Clients", value: "500+" }
          ]}
          showBorder={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Powerful Features Designed for You"
          description="Everything you need to manage, automate, and scale your business operations effortlessly"
          tag="Capabilities"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Seamless Integration",
              description: "Connect your favorite tools and apps in minutes. Our platform integrates with 500+ applications to create your perfect workflow.",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822281054-4gvr4tnl.jpg", imageAlt: "Integration dashboard" },
              items: [
                { icon: Zap, text: "One-click integrations" },
                { icon: Zap, text: "Instant synchronization" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Real-Time Collaboration",
              description: "Work together seamlessly with your team, regardless of location. Real-time updates keep everyone synchronized and productive.",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822281735-7xuwx1q2.jpg", imageAlt: "Team collaboration interface" },
              items: [
                { icon: Zap, text: "Live team updates" },
                { icon: Zap, text: "Built-in communication" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Enterprise Security",
              description: "Your data is protected with military-grade encryption and compliance with international standards. Sleep soundly knowing your business is secure.",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822282470-2dkx6y7v.jpg", imageAlt: "Security features" },
              items: [
                { icon: Zap, text: "End-to-end encryption" },
                { icon: Zap, text: "Advanced access controls" }
              ],
              reverse: false
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Perfect Plan"
          description="Flexible pricing options designed for teams of any size. Start free and scale as you grow."
          tag="Transparent Pricing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              badgeIcon: Rocket,
              price: "Free",
              subtitle: "Perfect for individuals and small teams",
              features: [
                "Up to 3 team members",
                "5GB storage",
                "Basic automations",
                "Email support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$49/month",
              subtitle: "Ideal for growing teams",
              features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced automations",
                "Priority email support",
                "Custom workflows"
              ]
            },
            {
              id: "enterprise",
              badge: "For Scale",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For enterprise organizations",
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom integrations",
                "24/7 phone support",
                "Dedicated success manager"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The talented individuals behind SaaS Pro's innovation and success"
          tag="Leadership"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Founder & CEO",
              description: "Former CTO at TechCorp with 15 years of SaaS experience building scalable platforms.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822283008-5oel47hd.png",
              imageAlt: "Sarah Mitchell",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "VP of Product",
              description: "Product strategist with a passion for solving complex business challenges through elegant design.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822283710-eth8qc1k.jpg",
              imageAlt: "Michael Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Head of Engineering",
              description: "Full-stack engineer committed to building reliable, performant systems that scale.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822284808-i3b601t1.jpg",
              imageAlt: "Emily Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "Chief Design Officer",
              description: "Award-winning designer focused on creating intuitive and beautiful user experiences.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822285497-dtbbic21.jpg",
              imageAlt: "David Kim",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://dribbble.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from teams using SaaS Pro to transform their workflows"
          tag="Customer Stories"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jessica Adams",
              handle: "@jessicaadams",
              testimonial: "SaaS Pro completely transformed how our team collaborates. We've cut project turnaround time in half and everyone is happier.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822286253-ce37mbg5.jpg",
              imageAlt: "Jessica Adams"
            },
            {
              id: "2",
              name: "James Porter",
              handle: "@jamesporter",
              testimonial: "The automations alone have saved us hundreds of hours every month. Best investment we've made for our team.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822286953-xcu7qdsq.jpg",
              imageAlt: "James Porter"
            },
            {
              id: "3",
              name: "Amanda Zhang",
              handle: "@amandazhang",
              testimonial: "Customer support is exceptional. Every question answered within minutes. The product quality is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822287576-a9bhqgdn.jpg",
              imageAlt: "Amanda Zhang"
            },
            {
              id: "4",
              name: "Robert Wilson",
              handle: "@robertwilson",
              testimonial: "We scaled from 10 to 100 team members and SaaS Pro scaled with us seamlessly. No issues whatsoever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822288262-yy3pvvfp.jpg",
              imageAlt: "Robert Wilson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Product News"
          description="Subscribe to our newsletter to receive exclusive tips, feature releases, and industry insights delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822288993-lp520taa.jpg"
          imageAlt="Modern office workspace"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SaaS Pro"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Docs", href: "#" },
                { label: "Status", href: "#" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support", href: "#" },
                { label: "Feedback", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}