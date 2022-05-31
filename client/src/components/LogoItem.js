import HeadingSvg from "../assets/svg/LoremLogo";

const LogoItem = ({ fill }) => {
  return (
    <div className="logo_container text-center">
      <HeadingSvg fill={fill} />
      <h5 className="mt-3">Lorem Ipsom 2.0</h5>
    </div>
  );
};

export default LogoItem;
