import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">{t('notfound.title')}</h2>
        <p className="mb-8 text-lg text-muted-foreground">{t('notfound.desc')}</p>
        <Link to="/">
          <Button size="lg" variant="default">
            {t('notfound.back')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
