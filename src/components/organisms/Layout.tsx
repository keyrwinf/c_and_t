import Header from "@/components/molecules/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center pb-16">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
