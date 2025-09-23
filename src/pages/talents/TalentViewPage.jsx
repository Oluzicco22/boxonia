import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AppearedPage from "../../components/talents/AppearedPage.jsx";
import Service from "../../services/indexApi.js";

const TalentViewPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [talent, setTalent] = useState(null);
    const [error, setError] = useState(null);
    const { talentId } = location.state || {}

    if(!talentId){
        navigate('/talents');
    }

    const service = new Service();

    const getTalent = async () => {
        setIsLoading(true);

        try{
            const res = await service.readTalent(talentId);
            setTalent(res.data);
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

    if (isLoading) {
        return (
            <div className="flex flex-col items-center gap-6 w-[90%] md:w-3/5 mx-auto mt-20">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
                <div className="w-1/2 h-6 rounded-md bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
                <div className="w-3/4 h-4 rounded-md bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
                <div className="w-full h-40 rounded-xl bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-center">
                <p className="text-red-500 text-xl font-semibold">⚠️ {error}</p>
                <button
                    onClick={() => getTalent()}
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!talent) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-center">
                <p className="text-gray-500 text-lg">🙁 Talent not found</p>
                <button
                    onClick={() => navigate('/talents')}
                    className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
                >
                    Back to Talents
                </button>
            </div>
        );
    }
    return (
       <AppearedPage talent={talent} />
    )
}

export default TalentViewPage;
