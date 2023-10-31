import { useState } from "react";
import { useColorContext } from "./ColorProvider";

const states = ['Rajasthan', 'Punjab', 'Haryana', 'HP', 'Uttarakhand'];

const cities = {
    "Select": [],
    "Rajasthan": ['Jaipur', 'Udaipur', 'Ajmer', 'Ganganagar', 'Mt Abu'],
    "Punjab": ["Bathinda", "Ludhiana", "Amritsar", "Patiala", "Jalandhar"],
    "Haryana": ["Rohtak", "Jind", "Sirsa", "Hisar", "Yamunanagar"],
    "HP": ["Shimla", "Manali", "Kullu", "Dalhousie", "Dharamsala"],
    "Uttarakhand": ["Mussoorie", "Dehradun", "Joshimath", "Haridwar", "Rishikesh"]
}

const hotels = {
    Rajasthan: {
        "Select": [],
        "Jaipur": ["Radisson Blue", "Rambagh", "Hotel Lake Place"],
        "Udapur": ["Jawahar Palace", "Jai Mahal", "Jaismand Palace"],
        'Ajmer': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        'Ganganagar': ["Pagoda", "Oriental Palace", "Moonlight"],
        'Mt Abu': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
    },

    Punjab: {
        "Select": [],
        "Bathinda": ["Jawahar Palace", "Jai Mahal", "Jaismand Palace"],
        "Ludhiana": ["Shyam Durbar", "Jai Mahal", "Maharaja Palace"],
        'Amritsar': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        'Patiala': ["Pagoda", "Oriental Palace", "Moonlight"],
        'Jalandhar': ["Radisson", "Hotel Inn", "Hotel Lake Place"],
    },

    Haryana: {
        "Select": [],
        "Rohtak": ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        "Jind": ["Jawahar Palace", "Jai Mahal", "Jaismand Palace"],
        'Sirsa': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        'Hisar': ["Pagoda", "Oriental Palace", "Moonlight"],
        'Yamunanagar': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
    },

    HP: {
        "Select": [],
        "Shimla": ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        "Manali": ["Jawahar Palace", "Jai Mahal", "Jaismand Palace"],
        'Kullu': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        'Dalhousie': ["Pagoda", "Oriental Palace", "Moonlight"],
        'Dharamsala': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
    },

    Uttarakhand: {
        "Select": [],
        "Mussoorie": ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        "Dehradun": ["Jawahar Palace", "Jai Mahal", "Jaismand Palace"],
        'Joshimath': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
        'Haridwar': ["Pagoda", "Oriental Palace", "Moonlight"],
        'Rishikesh': ["Radisson Blue", "Hotel Inn", "Hotel Lake Place"],
    }
}


const Dropdown = () => {
    //user value store
    const [selectedState, setSelectedState] = useState("Select");
    const [selectedCity, setSelectedCity] = useState("Select");
    const [selectedHotel, setSelectedHotel] = useState();

    //mapping value create 
    const [mapCity, setmapCity] = useState([]);
    const [mapHotel, setMapHotel] = useState([]);

    const { color } = useColorContext();

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(e.target.value);
        setmapCity(cities[state]);
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setMapHotel(hotels[selectedState][e.target.value])
    }

    const handleHotelChange = (e) => {
        setSelectedHotel(e.target.value);
    }

    return (
        <>
            <div className="container" style={{ border: "1px solid grey", marginBottom: "20px", backgroundColor: color }}>
                <p style={{ textAlign: "center", backgroundColor: "#E7B1B1", marginTop: "20px" }}>Dropdown Menu</p>

                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12">
                                <label>Select a State:</label>
                            </div>
                            <div className="col-12 mt-2">
                                <select value={selectedState} onChange={handleStateChange}>
                                    <option key={0} value={0}>---Please Select---</option>
                                    {states.map((item => {
                                        return (<>
                                            <option key={item} value={item}>{item}</option>
                                        </>);
                                    }))}
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="col-4" style={{ marginBottom: "250px" }}>
                        <div className="row">
                            <div className="col-12"><label>Select a City:</label></div>
                            <div className="col-12 mt-2">
                                <select value={selectedCity} onChange={handleCityChange}>
                                    <option key={0} value={0}>---Please Select---</option>
                                    {mapCity.map((item) => {
                                        return (<option key={item} value={item}>{item}</option>);
                                    })}
                                </select>
                            </div>
                        </div>


                    </div>

                    <div className="col-4">
                        <div className="row">
                            <div className="col-12"><label>Hotels Available:</label></div>
                            <div className="col-12 mt-2">
                                <select value={selectedHotel} onChange={handleHotelChange}>
                                    <option key={0} value={0}>---Please Select---</option>
                                    {mapHotel.map((item) => {
                                        return (<option key={item} value={item}>{item}</option>);
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Dropdown;