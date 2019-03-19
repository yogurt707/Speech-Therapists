app.factory("lookupSrv", function () {


    function getRegions() {
        return ["גליל עליון", "גליל תחתון", "אצבע הגליל", "בקעת הירדן", "הערבה", "הנגב", "השפלה", "השרון", "חיפה והסביבה", "יהודה", "השומרון", "השפלה", "מדבר יהודה", "עמק יזרעל",
            "אילת והסביבה", "ירושלים והסביבה", "ים המלח והסביבה", "רמת הגולן", "הגליל המערבי", "מישור החוף הצפוני", "מישור החוף הדרומי", "גוש דן", "בקעת באר שבע", "מכתשים בנגב",
            "הר הנגב", "הרי אילת", "חבל הבשור", "ארץ כינורות", "בקעת בית שאן", "בקעת ים המלח"];
    }

    function getTreatments() {

        return ["cp-סיפי", "אוטיזם-הפרעות-קשר-ילדים", "אוטיזם-הפרעות-קשר-מתבגרים", "אכילה-לעיסה-ובליעה-ילדים", "אכילה-לעיסה-ובליעה-מבוגרים", "בדיקות-שמיעה-והתאמת-מכשירי-שמיעה",
            "גמגום-והפרעות-בשטף-הדיבור-מבוגרים", "גמגום-והפרעות-בשטף-הדיבור-מבוגרים", "גמגום-והפרעות-בשטף-הדיבור-ילדים", "דחיקת-לשון", "דיקציה", "דיספרקסיה-של-הדיבור",
            "הפרעות-קול-ובליעה-על-רקע-נוירולוגי", "לקויות-שפה-אצל-ילדים", "לקויי-השפה-והדיבור-נרכשות-אפזיה-ילד", "לקויי-השפה-והדיבור-נרכשות-אפזיה-מבו",
            "לקויי-למידה-וטיפולי-שפה-לילדי-בית-ספר", "צרידות-ולקויות-בקול-ילדים", "צרידות-ולקויות-בקול-מבוגרים", "קשיי-דיבור-על-רקע-מבני", "שיום-שמיעה", "תקשורת-תומכת-חליפית"];
    }


    return {
        getRegions: getRegions,
        getTreatments: getTreatments
    }

    });
    