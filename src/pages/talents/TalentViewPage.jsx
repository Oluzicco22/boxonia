import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TalentData from "../../data/talents.json";
import AppearedPage from "../../components/talents/Appearance/AppearedPage.jsx";
import NoAppearancePage from "../../components/talents/Appearance/NoAppearancePage.jsx";

const TalentViewPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [talent, setTalent] = useState(null);
    const [error, setError] = useState(null);
    const { castName } = useParams();

    const getTalent = () => {
        setIsLoading(true);
        try{
            const [firstName, lastName] = castName.split(" ")
            const talent = TalentData.find(talent => {
                return (
                    talent.firstName === firstName && talent.lastName === lastName
                )
            });
            setTalent(talent);
        }catch (e){
            console.log(e.message);
            setError('Failed fetching talent')
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getTalent()
    }, [])

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;
    if(!talent) return <p>Talent not found</p>;

    return (
        <>
            {talent.relatedProjects.length > 0 ? <AppearedPage talent={talent} /> : <NoAppearancePage />}
        </>

    )
}

export default TalentViewPage;
