import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <Image
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
        alt="Profile Picture"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ProfilePicture; 