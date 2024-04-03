import AvatarRounded from "./userComponents/AvatarRounded";
import profile from "../../public/pro.png";
import notification from "../../public/notification.png";

const Navbar = () => {
  const Profile = profile.src;
  const Notification = notification.src;
  return (
    <nav className="relative w-full h-[7vh] shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:p-8">
        <div>
          <span className="font-bold text-xl">Signature Tab</span>
        </div>
        <div className="flex">
          <AvatarRounded
            src={Profile}
            alt="Profile Image"
            height={30}
            width={32}
          />
          <AvatarRounded
            src={Notification}
            alt="notification photo"
            height={40}
            width={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
