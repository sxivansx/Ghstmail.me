// reviews.ts
export const reviews = [
  {
    
    text: "Amazing product! Don't have to worry about spam emails anymore. I have been using this for quite some time and now this is my goto whenever I need to login into a website I'm unsure about!",
    name: "Manish S.",
    role: "CEO, Delicio.in",
    avatar: "M",
    avatarColor: "bg-blue-400"
  },
  {
    
    text: "A unique way to solve this problem, definitely has a use-case for everyday spam use, the chrome extension makes it kinda easy to use as well",
    name: "Sky Singh",
    role: "Devops Engineer, Vance",
    avatar: "S",
    avatarColor: "bg-pink-400"
  },
  {
    
    text: "Sax-Sux kro itna nahi sochte",
    name: "Rudrax Singh",
    role: "Css God",
    avatar: "Rx",
    avatarColor: "bg-green-400"
  }
];

export type ReviewCardProps = {
  text: string;
  name: string;
  role: string;
  avatar: string;
  avatarColor: string;
};

export function ReviewCard({ text, name, role, avatar, avatarColor }: ReviewCardProps) {
  return (
    <div className="bg-[#8f6be8]/60 rounded-xl p-8 m-4 min-w-[350px] max-w-[400px] flex flex-col shadow-lg border border-white/30">
      <div className="flex items-center mb-4">
        
      </div>
      <div className="italic text-white mb-6">{text}</div>
      <div className="flex items-center mt-auto">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 ${avatarColor}`}>
          {avatar}
        </div>
        <div>
          <div className="font-bold text-white">{name}</div>
          <div className="text-white/80 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
} 