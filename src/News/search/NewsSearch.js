import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { KEYWORD_SUGGESTION_API_URL, suggestionApiOptions} from '../../api'

const NewsSearch = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)

    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${KEYWORD_SUGGESTION_API_URL}suggestqueries?query=${inputValue}`, suggestionApiOptions);
            const result = await response.json();
            // console.log(result);
            return {
                options: result.map((suggestion) => {
                    return {
                        value: `value`,
                        label: `${suggestion}`,
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }
    }

    return (
        <AsyncPaginate
            placeholder="Search for something interesting!"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default NewsSearch