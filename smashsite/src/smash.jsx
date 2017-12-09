const approximateStars = x => Math.ceil((x+1)*8/79)/2

const performRatingChange = (updateToons,name,data) => stat => e => {
    const aproxStars = approximateStars(e.nativeEvent.offsetX);
    const nextRating = (e.type == "mousemove")
        ? [data.ratings[stat][0],data.ratings[stat][1],aproxStars]
        : (e.type == "click") 
        ? [aproxStars,data.ratings[stat][1],aproxStars]
        : [data.ratings[stat][0],data.ratings[stat][1]]
    updateToons({[name]:{...data,ratings:{...data.ratings,[stat]:nextRating}}})
}

const Rating = ({ratingChange,...props}) => <span className="Rating">
            <span>{props.stat.toUpperCase()}</span>
            <div className="greystar" />
            <div style={{width:((79/4*props.siteValue)-1), zIndex:2*(5-props.siteValue)}} className="redstar" 
            />
            {(props.dispValue != undefined)
                ? <div style={{width:((79/4*props.dispValue)-1), zIndex:9}} className="yellowstar" /> 
                : (props.userValue == 0) 
                ? <div style={{width:0, zIndex:(5-props.userValue)}} className="yellowstar" /> 
                : <div style={{width:((79/4*props.userValue)-1), zIndex:2*(5-props.userValue)}} className="yellowstar" /> 
            }
            <div className="mousestar" onClick={ratingChange} onMouseMove={ratingChange} onMouseLeave={ratingChange} />
        </span>

const Card = props => <span className="card">
        <div className="portrait" style={{backgroundImage:`url('img/${props.name.toLowerCase().replace(/[\s\W]*/g,"")}.png')`}} onClick={props.setSelected}>
            <div className={props.data["favorite"]?"favorite":"unfavorite"} onClick={props.favoriteToon}></div>
            <span className={"name"}>{props.name}</span>
        </div>
        <div>{Object.entries(props.data.ratings).map(
            ([stat,[userValue,siteValue,dispValue]]) => <Rating 
                key={stat} 
                stat={stat} 
                userValue={userValue} 
                siteValue={siteValue} 
                dispValue={dispValue}
                ratingChange={props.ratingChange(stat)} />
        )}
            <a className="detailsLink" onClick = {props.setSelected}>
                [Details]
            </a>
        </div>
    </span>

const CardPane = ({setSelected, updateToons, ...props}) => <div className="cardpane">
        {props.filters[props.currentFilter](searchFilter(props.searchTerm)(
                Object.entries(props.toons).sort(props.sorting[props.currentSorter])
            )).map(([name,dat]) => <Card 
                key={name} 
                name={name} 
                data={dat} 
                favoriteToon={props.favoriteToon([name,dat])} 
                setSelected={setSelected(name)} 
                ratingChange={performRatingChange(updateToons, name, dat)}
            />)}
    </div>

const Header = (props) => <div style={{display:'table',backgroundColor:'white',width:'100%'}}>
        <div id="header">
            <img src='logo.png' />
            <span>PROFILE: <a className="w3-button" onClick={props.changeName}>{props.profile}</a></span>
            <span>FILTER CARDS: <div className="w3-dropdown-hover">
                <button className="w3-button">{props.currentFilter}</button>
            <div className="w3-dropdown-content w3-button w3-bar-block">
                {Object.entries(props.filters).map(([name,fn]) => (
                    <a href="#" key={name} onClick={props.selectFilter(name)} className="w3-bar-item w3-button">{name}</a>
                ))}
            </div></div></span>
            <span>SORT CARDS: <div className="w3-dropdown-hover">
                <button className="w3-button">{props.currentSorter}</button>
            <div className="w3-dropdown-content w3-button w3-bar-block">
                {Object.entries(props.sorting).map(([name,fn]) => (
                    <a href="#" key={name} onClick={props.selectSorter(name)} className="w3-bar-item w3-button">{name}</a>
                ))}
            </div></div></span>
            <span>SEARCH: <input type="text" className="w3-text" onChange={props.setSearchTerm}/></span>
        </div>
    </div>

const CardContent = ({addTip, setSelected, updateToons, ...props}) => {
    return (
            <div style={{display:"table",height:"90vh", overflowY:"auto"}}>
                <div id="bod">
                    <div id="cardtable" style={{display:"table-cell",width:"75%",padding:0,margin:0,border:0}}>
                        <CardPane {...props} favoriteToon={favoriteToon(updateToons)} setSelected={setSelected} updateToons={updateToons} />
                    </div>
                    <div id="characterpane">
                        <Card name={props.selected} 
                            ratingChange={performRatingChange(updateToons, props.selected, props.toons[props.selected])}
                        data={props.toons[props.selected]} favoriteToon={favoriteToon(updateToons)([props.selected,props.toons[props.selected]])}/>
                        <p style={{fontSize:'15pt'}}>TIPS</p>
                        <ul>{props.toons[props.selected].comments.map(({user,text},i) => <li key={user + i} >
                                <span style={{fontWeight:'bold'}}>{user}: </span> 
                                <span style={{fontFamily:'Arial, Helvetica, sans-serif'}}>{text}</span>
                            </li>)}
                        </ul>
                        <a className="w3-button" style={{background:'black',color:'white'}} onClick={addTip(props.selected)} >ADD COMMENT</a>
                    </div>
                </div>
            </div>
        )
    }

class WebPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            selected:"Mario",
            currentSorter:"ALPHABET",
            currentFilter:"NO FILTER",
            searchTerm:"",
            profile:"DEFAULT",
        }
    }
    addTip(me) {
        return name => e => {
            if(this.state.profile == "DEFAULT") {
                alert("Please choose a profile name first");
            } else {
                const tip = prompt(`What is your tip for playing ${name}?`)
                this.setState(
                    {
                        toons:{
                            ...this.state.toons,
                            [name]: {
                                ...this.state.toons[name],
                                comments:[...this.state.toons[name].comments,{
                                    user:this.state.profile,
                                    text:tip
                                }]
                            }

                        }
                    }
                )
            }
        }
    }
    changeName(me) {
        return e => {
            const promptResponse = window.prompt("Enter profile name:")
            const newProfile = (promptResponse == "") ? "DEFAULT" : promptResponse
            this.setState({profile:newProfile})
        }

    }
    updateToons(me) {
        return a => {
            this.setState({toons:{...this.state.toons,...a}})
        }
    }
    selectFilter(me) {
        return filtStr => e => this.setState({currentFilter:filtStr})
    }
    selectSorter(me) {
        return filtStr => e => this.setState({currentSorter:filtStr})
    }
    setSearchTerm(me) {
        return event => this.setState({searchTerm:event.nativeEvent.target.value})
    }
    setSelected(me) {
        return selectionName => e => this.setState({selected:selectionName})
    }
    render() {
        return <div>
            <Header {...this.state} 
                selectFilter={this.selectFilter(this)}
                selectSorter={this.selectSorter(this)} 
                setSearchTerm={this.setSearchTerm(this)} 
                changeName={this.changeName(this)}
                />
            <CardContent {...this.state} 
                updateToons={this.updateToons(this)} 
                setSelected={this.setSelected(this)}
                addTip={this.addTip(this)}
            />
        </div>

    }
}

const favoriteToon = updateToons => ([name,data]) => event => updateToons({[name]:{...data, favorite:!data.favorite}})

const getRating = (a, stat) => ((a[1].ratings[stat][0] == 0) ? a[1].ratings[stat][1] : a[1].ratings[stat][0]) 
const searchFilter = term => (term == "")
    ? a=>a
    : a => a.filter(x=>x[0].toLowerCase().includes(term.toLowerCase()) )

const filters = {
    "NO FILTER": a => a,
    "FAVORITES ONLY": a => a.filter(x=>x[1].favorite),
    "TOP 5":a => a.slice(0,5)
}

const sorting = {
    ALPHABET: (a, b) => a[0].localeCompare(b[0]),
    POWER: (a, b) => getRating(b,"power") - getRating(a,"power"),
    DEFENSE: (a, b) => getRating(b,"defense") - getRating(a,"defense"),
    SPEED: (a, b) => getRating(b,"speed") - getRating(a,"speed"),
    FLEXIBILITY: (a, b) => getRating(b,"flexibility") - getRating(a,"flexibility"),
    RANGE: (a, b) => getRating(b,"range") - getRating(a,"range"),
    RECOVERY: (a, b) => getRating(b,"recovery") - getRating(a,"recovery")
}

ReactDOM.render(<WebPage toons={chars2} filters={filters} sorting={sorting} />, document.getElementById("cards"))