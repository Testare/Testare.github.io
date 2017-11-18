var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const approximateStars = x => Math.ceil((x + 1) * 8 / 79) / 2;

const performRatingChange = (updateToons, name, data) => stat => e => {
    const aproxStars = approximateStars(e.nativeEvent.offsetX);
    const nextRating = e.type == "mousemove" ? [data.ratings[stat][0], data.ratings[stat][1], aproxStars] : e.type == "click" ? [aproxStars, data.ratings[stat][1], aproxStars] : [data.ratings[stat][0], data.ratings[stat][1]];
    updateToons({ [name]: _extends({}, data, { ratings: _extends({}, data.ratings, { [stat]: nextRating }) }) });
};

const Rating = (_ref) => {
    let { ratingChange } = _ref,
        props = _objectWithoutProperties(_ref, ["ratingChange"]);

    return React.createElement(
        "span",
        { className: "Rating" },
        React.createElement(
            "span",
            null,
            props.stat.toUpperCase()
        ),
        React.createElement("div", { className: "greystar" }),
        React.createElement("div", { style: { width: 79 / 4 * props.siteValue - 1, zIndex: 2 * (5 - props.siteValue) }, className: "redstar"
        }),
        props.dispValue != undefined ? React.createElement("div", { style: { width: 79 / 4 * props.dispValue - 1, zIndex: 9 }, className: "yellowstar" }) : props.userValue == 0 ? React.createElement("div", { style: { width: 0, zIndex: 5 - props.userValue }, className: "yellowstar" }) : React.createElement("div", { style: { width: 79 / 4 * props.userValue - 1, zIndex: 2 * (5 - props.userValue) }, className: "yellowstar" }),
        React.createElement("div", { className: "mousestar", onClick: ratingChange, onMouseMove: ratingChange, onMouseLeave: ratingChange })
    );
};

const Card = props => React.createElement(
    "span",
    { className: "card" },
    React.createElement(
        "div",
        { className: "portrait", style: { backgroundImage: `url('img/${props.name.toLowerCase().replace(/[\s\W]*/g, "")}.png')` } },
        React.createElement("div", { className: props.data["favorite"] ? "favorite" : "unfavorite", onClick: props.favoriteToon }),
        React.createElement(
            "span",
            { className: "name" },
            props.name
        )
    ),
    React.createElement(
        "div",
        null,
        Object.entries(props.data.ratings).map(([stat, [userValue, siteValue, dispValue]]) => React.createElement(Rating, {
            key: stat,
            stat: stat,
            userValue: userValue,
            siteValue: siteValue,
            dispValue: dispValue,
            ratingChange: props.ratingChange(stat) })),
        React.createElement(
            "a",
            { className: "detailsLink", onClick: props.setSelected },
            "[Details]"
        )
    )
);

const CardPane = (_ref2) => {
    let { setSelected, updateToons } = _ref2,
        props = _objectWithoutProperties(_ref2, ["setSelected", "updateToons"]);

    return React.createElement(
        "div",
        null,
        props.filters[props.currentFilter](searchFilter(props.searchTerm)(Object.entries(props.toons).sort(props.sorting[props.currentSorter]))).map(([name, dat]) => React.createElement(Card, {
            key: name,
            name: name,
            data: dat,
            favoriteToon: props.favoriteToon([name, dat]),
            setSelected: setSelected(name),
            ratingChange: performRatingChange(updateToons, name, dat)
        }))
    );
};

const Header = props => React.createElement(
    "div",
    { style: { display: 'table', backgroundColor: 'white', width: '100%' } },
    React.createElement(
        "div",
        { id: "header" },
        React.createElement("img", { src: "logo.png" }),
        React.createElement(
            "span",
            null,
            "PROFILE: ",
            React.createElement(
                "a",
                { className: "w3-button", onClick: props.changeName },
                props.profile
            )
        ),
        React.createElement(
            "span",
            null,
            "SHOW: ",
            React.createElement(
                "div",
                { className: "w3-dropdown-hover" },
                React.createElement(
                    "button",
                    { className: "w3-button" },
                    props.currentFilter
                ),
                React.createElement(
                    "div",
                    { className: "w3-dropdown-content w3-button w3-bar-block" },
                    Object.entries(props.filters).map(([name, fn]) => React.createElement(
                        "a",
                        { href: "#", key: name, onClick: props.selectFilter(name), className: "w3-bar-item w3-button" },
                        name
                    ))
                )
            )
        ),
        React.createElement(
            "span",
            null,
            "SORT BY: ",
            React.createElement(
                "div",
                { className: "w3-dropdown-hover" },
                React.createElement(
                    "button",
                    { className: "w3-button" },
                    props.currentSorter
                ),
                React.createElement(
                    "div",
                    { className: "w3-dropdown-content w3-button w3-bar-block" },
                    Object.entries(props.sorting).map(([name, fn]) => React.createElement(
                        "a",
                        { href: "#", key: name, onClick: props.selectSorter(name), className: "w3-bar-item w3-button" },
                        name
                    ))
                )
            )
        ),
        React.createElement(
            "span",
            null,
            "SEARCH: ",
            React.createElement("input", { type: "text", className: "w3-text", onChange: props.setSearchTerm })
        )
    )
);

const CardContent = (_ref3) => {
    let { addTip, setSelected, updateToons } = _ref3,
        props = _objectWithoutProperties(_ref3, ["addTip", "setSelected", "updateToons"]);

    return React.createElement(
        "div",
        { style: { display: "table", height: "80vh" } },
        React.createElement(
            "div",
            { id: "bod" },
            React.createElement(
                "div",
                { id: "cardtable", style: { display: "table-cell", width: "75%", padding: 0, margin: 0, border: 0 } },
                React.createElement(CardPane, _extends({}, props, { favoriteToon: favoriteToon(updateToons), setSelected: setSelected, updateToons: updateToons }))
            ),
            React.createElement(
                "div",
                { id: "characterpane" },
                React.createElement(Card, { name: props.selected,
                    ratingChange: performRatingChange(updateToons, props.selected, props.toons[props.selected]),
                    data: props.toons[props.selected], favoriteToon: favoriteToon(updateToons)([props.selected, props.toons[props.selected]]) }),
                React.createElement(
                    "p",
                    { style: { fontSize: '15pt' } },
                    "TIPS"
                ),
                React.createElement(
                    "ul",
                    null,
                    props.toons[props.selected].comments.map(({ user, text }, i) => React.createElement(
                        "li",
                        { key: user + i },
                        React.createElement(
                            "span",
                            { style: { fontWeight: 'bold' } },
                            user,
                            ": "
                        ),
                        React.createElement(
                            "span",
                            { style: { fontFamily: 'Arial, Helvetica, sans-serif' } },
                            text
                        )
                    ))
                ),
                React.createElement(
                    "a",
                    { className: "w3-button", style: { background: 'black', color: 'white' }, onClick: addTip(props.selected) },
                    "ADD COMMENT"
                )
            )
        )
    );
};

class WebPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = _extends({}, props, {
            selected: "Mario",
            currentSorter: "NAME",
            currentFilter: "EVERYONE",
            searchTerm: "",
            profile: "DEFAULT"
        });
    }
    addTip(me) {
        return name => e => {
            if (this.state.profile == "DEFAULT") {
                alert("Please choose a profile name first");
            } else {
                const tip = prompt(`What is your tip for playing ${name}?`);
                this.setState({
                    toons: _extends({}, this.state.toons, {
                        [name]: _extends({}, this.state.toons[name], {
                            comments: [...this.state.toons[name].comments, {
                                user: this.state.profile,
                                text: tip
                            }]
                        })

                    })
                });
            }
        };
    }
    changeName(me) {
        return e => {
            const promptResponse = window.prompt("Enter profile name:");
            const newProfile = promptResponse == "" ? "DEFAULT" : promptResponse;
            this.setState({ profile: newProfile });
        };
    }
    updateToons(me) {
        return a => {
            this.setState({ toons: _extends({}, this.state.toons, a) });
        };
    }
    selectFilter(me) {
        return filtStr => e => this.setState({ currentFilter: filtStr });
    }
    selectSorter(me) {
        return filtStr => e => this.setState({ currentSorter: filtStr });
    }
    setSearchTerm(me) {
        return event => this.setState({ searchTerm: event.nativeEvent.target.value });
    }
    setSelected(me) {
        return selectionName => e => this.setState({ selected: selectionName });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Header, _extends({}, this.state, {
                selectFilter: this.selectFilter(this),
                selectSorter: this.selectSorter(this),
                setSearchTerm: this.setSearchTerm(this),
                changeName: this.changeName(this)
            })),
            React.createElement(CardContent, _extends({}, this.state, {
                updateToons: this.updateToons(this),
                setSelected: this.setSelected(this),
                addTip: this.addTip(this)
            }))
        );
    }
}

const favoriteToon = updateToons => ([name, data]) => event => updateToons({ [name]: _extends({}, data, { favorite: !data.favorite }) });

const getRating = (a, stat) => a[1].ratings[stat][0] == 0 ? a[1].ratings[stat][1] : a[1].ratings[stat][0];
const searchFilter = term => term == "" ? a => a : a => a.filter(x => x[0].toLowerCase().includes(term.toLowerCase()));

const filters = {
    "EVERYONE": a => a,
    "FAVORITES ONLY": a => a.filter(x => x[1].favorite),
    "TOP 5": a => a.slice(0, 5)
};

const sorting = {
    NAME: (a, b) => a[0].localeCompare(b[0]),
    POWER: (a, b) => getRating(b, "power") - getRating(a, "power"),
    DEFENSE: (a, b) => getRating(b, "defense") - getRating(a, "defense"),
    SPEED: (a, b) => getRating(b, "speed") - getRating(a, "speed"),
    FLEXIBILITY: (a, b) => getRating(b, "flexibility") - getRating(a, "flexibility"),
    RANGE: (a, b) => getRating(b, "range") - getRating(a, "range"),
    RECOVERY: (a, b) => getRating(b, "recovery") - getRating(a, "recovery")
};

ReactDOM.render(React.createElement(WebPage, { toons: chars2, filters: filters, sorting: sorting }), document.getElementById("cards"));