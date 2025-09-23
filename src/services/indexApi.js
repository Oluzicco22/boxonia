import instance from "../server.js";

class Service {
    async readTalents(){
        const { data } = await instance.get('talents');
        return data;
    }

    async readTalent(talentId){
        const { data } = await instance.get(`talent/${talentId}`);
        return data;
    }

    async contactMail(body = {}){
        const { data } = await instance.post('contact-us', {
            email: body.email,
            message: body.message,
            subject: body.subject,
            name: body.name
        });
        return data;
    }
}

export default Service;
