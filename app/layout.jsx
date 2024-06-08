import { Jacques_Francois } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import AboutBoxContainer from '@/components/AboutBoxContainer';
import HowItWorks from '@/components/HowItWorks';

const jacques_Francois = Jacques_Francois({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const solutionItems = [
    {
      title: 'Easy Chapter Creation:',
      content:
        'TubeChapters uses AI to create timestamps and chapters instantly,which saves you hours of transcription work.',
    },
    {
      title: 'All-in-One Solution:',
      content:
        'TubeChapters has more than just chapters for YouTube videos. It also has a set of tools for making attractive titles, video descriptions, and hashtags.',
    },
    {
      title: 'Easy to use and simple: ',
      content:
        "TubeChapters is so simple to use that even people who don't have much knowledge about technology can use it easily.",
    },
  ];
  const howItWorksItems = [
    {
      title: 'Step 1: Paste your video URL.',
      content:
        "Like magic, TubeChapters can work with any type or size of video. You're all set to go once you copy and paste the URL of your video.",
    },
    {
      title: 'Step 2: Choose settings',
      content:
        'Want chapters in a different language besides English? TubeChapters supports many different languages. Just pick the language that your video needs and let the AI do its thing.',
      othercontent:
        'You can also pick between simple chapters, and complex chapters. Simple chapters will include just a title which describes the relevant video section, while complex captions dive deeper into each part of the video, by providing a brief summary.',
    },
    {
      title: 'Step 3: Use AI to write chapters',
      content: `When you press the "Generate" button, our advanced AI technology takes over. It takes the spoken words in your video, turns them into text, and then automatically divides your content into chapters, along with relevant timestamps.`,
    },
    {
      title: 'Step 4: Share Your Work!',
      content: `Your video is ready to go in seconds! Copy your complete work with captions and clear chapters for a professional and engaging video experience.
`,
      othercontent:
        'Then, paste them wherever you like: video description, YouTube comments, or social media.',
    },
  ];
  return (
    <html lang="en">
      <body className={`${jacques_Francois.className} md:px-16 px-2 bg-back`}>
        <Nav />
        <div className="min-h-[80vh] flex flex-col justify-center items-center relative ">
          {children}
        </div>
        <div
          id="about"
          className="flex flex-col sm:p-8 p-4 text-center gap-y-4 items-center"
        >
          <h2 className="text-2xl font-bold text-[#dc2626]">About us</h2>
          <p className="text-base text-primary max-w-[600px]">
            TubeChapters is the best tool for making your YouTube videos more
            engaging and optimized for audience retention, as well as YouTube
            SEO. We make it easy to add chapters and timestamps to your YouTube
            videos, allowing viewers to skip directly to the chapters that
            interest them the mos and provide a derailed timeline about the best
            parts of your videos.
          </p>
          <p className="text-base text-primary max-w-[600px]">
            This not only improves the viewing experience, but it can also help
            you make your YouTube videos more engaging, rank higher on YouTube,
            and increase the growth of your channel.
          </p>
          <h2 className="text-lg font-bold text-[#dc2626]">
            Your One-Stop Solution to Generate YouTube Captions and TimeStamps
          </h2>
          <AboutBoxContainer items={solutionItems} />
          <h2 className="text-xl mt-6 font-bold text-[#dc2626]">
            TubeChapters Creates Chapters with AI
          </h2>
          <p className="text-base text-primary max-w-[600px]">
            Stop doing all that boring work manually! TubeChapters uses AI to
            generate YouTube chapters for you. Just add your YouTube video URL
            and our advanced technology will automatically create timestamps for
            important parts of your video.
          </p>
          <p className="text-base text-primary max-w-[600px]">
            This helps you avoid the time-consuming task of transcription, so
            you can concentrate on producing high-quality content. After that,
            you can improve these timestamps and add detailed titles to make the
            video look more professional and make it easier for people to
            navigate easily in your video.
          </p>
          <HowItWorks />
          <AboutBoxContainer items={howItWorksItems} />
          <p className="text-base text-primary max-w-[600px]">
            And no need for a{' '}
            <span className="text-[#dc2626]">credit card!</span> Start with
            TubeChapters{`'`} free plan and see how powerful it is to make
            chapters quickly and easily.
          </p>
        </div>
      </body>
    </html>
  );
}
