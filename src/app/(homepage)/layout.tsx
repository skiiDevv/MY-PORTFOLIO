function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <main>
          <div>{children}</div>
        </main>
      </div>
    );
  }
  
  export default HomeLayout;