(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[26],{1147:function(e,t,a){"use strict";a.r(t);var n,r=a(8),l=a(43),c=a(49),i=a(45),o=a(48),s=a(1122),u=a(1145),d=a(1149),p=a(178),m=a(179),h=a(0),f=a.n(h),g=a(106),b=a(61),C=a(95),v=a(609),E=a(551),O=a(554),j=a(38),x=a(52),y=function(e,t){return{loadPeople:function(t,a){return e(j.dbFetchFindPeople(t,a))},increasePage:function(){return e(j.increaseFindPagePeoplePage())}}},w=function(){var e=x.a.selectMoreFindPeople(),t=x.a.selectFindPeople(),a=x.a.selectFindPeoplePage();return function(n){var r=e(n);return{peopleInfo:t(n),hasMorePeople:r,page:a(n)}}},N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).nextPage=0,a.scrollLoad=function(){var e=a.props,t=e.loadPeople,n=e.page,r=e.increasePage;void 0!==n&&t&&r&&(t(n,10),r())},a.state={},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.scrollLoad()}},{key:"render",value:function(){var e=this.props,t=e.hasMorePeople,a=e.t,n=this.props.peopleInfo;return f.a.createElement("div",null,f.a.createElement(O.a,{dataLength:n?n.count():0,next:this.scrollLoad,hasMore:t,endMessage:f.a.createElement("p",{style:{textAlign:"center"}}),loader:f.a.createElement(E.a,{key:"find-people-load-more-progress"})},f.a.createElement("div",{className:"tracks"},n&&n.count()>0?f.a.createElement("div",null,f.a.createElement("div",{className:"profile__title"},a("people.suggestionsForYouLabel")),f.a.createElement(v.a,{users:n}),f.a.createElement("div",{style:{height:"24px"}})):f.a.createElement("div",{className:"g__title-center"},a("people.nothingToShowLabel")))))}}]),t}(h.Component),I=Object(g.c)("translations")(N),k=(n=I,Object(b.connect)(w,y)(n)),S=a(4),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.t,t=this.props.followers;return f.a.createElement("div",null,t&&0!==t.keySeq().count()?f.a.createElement("div",null,f.a.createElement("div",{className:"profile__title"},e("people.followersLabel")),f.a.createElement(v.a,{users:t}),f.a.createElement("div",{style:{height:"24px"}})):f.a.createElement("div",{className:"g__title-center"},e("people.noFollowersLabel")))}}]),t}(h.Component),L=Object(g.c)("translations")(T),P=Object(b.connect)((function(e){return{followers:e.getIn(["circle","userTieds"],Object(S.Map)({}))}}),(function(){return{}}))(L),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.t,t=this.props.followingUsers;return f.a.createElement("div",null,t&&0!==t.keySeq().count()?f.a.createElement("div",null,f.a.createElement("div",{className:"profile__title"},e("people.followingLabel")),f.a.createElement(v.a,{users:t}),f.a.createElement("div",{style:{height:"24px"}})):f.a.createElement("div",{className:"g__title-center"},e("people.noFollowingLabel")))}}]),t}(h.Component),F=Object(g.c)("translations")(B),R=Object(b.connect)((function(e,t){return{uid:e.getIn(["authorize","uid"],0),circles:e.getIn(["circle","circleList"],{}),followingUsers:e.getIn(["circle","userTies"],{})}}),(function(e,t){return{}}))(F),M=a(474),D=a(86),_=a(15),U=a(800),A=a(931),q=a(1114),W=a(1116),z=a(1115),H=a(696),J=a(524),X=a(528),Y=a(1113),G=a(531),K=a(530),Q=a(1112),V=a(473),Z=a(471),$=a(16),ee=a(522),te=a(552),ae=a.n(te),ne=a(1036),re=a.n(ne),le=a(546),ce=a.n(le),ie=a(202),oe=a(90),se=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).styles={userListItem:{backgroundColor:"#e2e2e2"},rightIconMenu:{display:"block",position:"absolute",top:"0px",right:"12px"},settingOverlay:{background:"rgba(0,0,0,0.12)"},settingContent:{maxWidth:"400px"},listMenu:{color:"rgba(0,0,0,0.87)",fontSize:"16px",marginRight:"8px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},a.handleChangeCircleName=function(e){var t=e.target.value;a.setState({circleName:t,disabledSave:!t||""===t.trim()})},a.handleCloseMenu=function(){a.setState({anchorElMenu:null})},a.handleOpenMenu=function(e){a.setState({anchorElMenu:e.currentTarget})},a.handleUpdateCircle=function(){var e=a.state.circleName;e&&""!==e.trim()&&a.props.updateCircle({name:e,id:a.props.id})},a.handleDeleteCircle=function(){a.props.deleteCircle(a.props.id)},a.handleToggleCircle=function(){a.setState({open:!a.state.open})},a.userList=function(){var e=a.props.usersOfCircle,t=[];if(e)return e.forEach((function(e,n){var r=e.get("fullName"),l=e.get("avatar","");t.push(f.a.createElement(X.a,{button:!0,key:"".concat(a.props.id,".").concat(n),style:a.styles.userListItem,onClick:function(){return a.props.goTo("/".concat(n))}},f.a.createElement(ie.a,{fullName:r,fileName:l}),f.a.createElement(K.a,{inset:!0,primary:r})))})),t},a.state={open:!1,circleName:a.props.circle.get("name",""),disabledSave:!1,anchorElMenu:null},a.handleToggleCircle=a.handleToggleCircle.bind(Object(D.a)(a)),a.handleDeleteCircle=a.handleDeleteCircle.bind(Object(D.a)(a)),a.handleUpdateCircle=a.handleUpdateCircle.bind(Object(D.a)(a)),a.handleChangeCircleName=a.handleChangeCircleName.bind(Object(D.a)(a)),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.circle,a=e.classes,n=e.t,r=this.state.anchorElMenu,l=f.a.createElement("div",null,f.a.createElement(J.a,{"aria-owns":r?"circle-menu":"","aria-haspopup":"true",onClick:this.handleOpenMenu},f.a.createElement(ce.a,null)),f.a.createElement(Z.a,{id:"current-user-menu-root",anchorEl:r,open:Boolean(r),onClose:this.handleCloseMenu,PaperProps:{style:{maxHeight:900,boxShadow:"0 1px 4px 0 rgba(0,0,0,0.14)"}}},f.a.createElement(V.a,{role:"menu"},f.a.createElement(Q.a,{onClick:this.handleDeleteCircle}," ",n("circle.deleteCircleButton")," "),f.a.createElement(Q.a,{onClick:this.props.openCircleSettings}," ",n("circle.settingLable")," ")))),c=this.props.circle.get("name");c="Following"===c?n("userBox.followingLabel"):c;var i=f.a.createElement("div",null,f.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},f.a.createElement("div",{style:{paddingRight:"10px"}},f.a.createElement(ae.a,{onClick:this.props.closeCircleSettings,style:{cursor:"pointer"}})),f.a.createElement("div",{style:{color:"rgba(0,0,0,0.87)",flex:"1 1",font:"500 20px Roboto,RobotoDraft,Helvetica,Arial,sans-serif"}},n("circle.settingLable")),f.a.createElement("div",{style:{marginTop:"-9px"}},f.a.createElement(U.a,{color:"primary",disabled:this.state.disabledSave,onClick:this.handleUpdateCircle}," ",n("circle.saveButton")," "))),f.a.createElement(H.a,null));return f.a.createElement("div",null,f.a.createElement(X.a,{className:a.root,key:this.props.id+"-CircleComponent",onClick:this.handleToggleCircle},f.a.createElement(Y.a,{className:a.icon},f.a.createElement(re.a,null)),f.a.createElement(K.a,{inset:!0,primary:f.a.createElement("span",{style:this.styles},c)}),f.a.createElement(G.a,null,t.get("isSystem")?null:l)),f.a.createElement(A.a,{component:"li",in:this.state.open,timeout:"auto",unmountOnExit:!0},f.a.createElement(M.a,{disablePadding:!0},this.userList())),f.a.createElement(q.a,{PaperProps:{className:a.fullPageXs},key:this.props.id,open:this.props.openSetting,onClose:this.props.closeCircleSettings,classes:{paper:a.dialogPaper}},f.a.createElement(z.a,null,i),f.a.createElement(W.a,null,f.a.createElement(ee.a,{fullWidth:!0,autoFocus:!0,placeholder:n("circle.circleName"),label:n("circle.circleName"),onChange:this.handleChangeCircleName,value:this.state.circleName}))))}}]),t}(h.Component),ue=Object(g.c)("translations")(se),de=Object(b.connect)((function(e,t){var a=e.getIn(["circle","userTies"]),n=t.circle.get("id"),r=Object(S.Map)({});return a.forEach((function(e,a){var n=e;n.getIn(["circleIdList"]).indexOf(t.id)>-1&&(r=r.set(a,n))})),{usersOfCircle:r,openSetting:e.getIn(["circle","openSetting",n],!1)}}),(function(e,t){return{deleteCircle:function(t){return e(oe.h(t))},updateCircle:function(t){return e(oe.n(t))},closeCircleSettings:function(){return e(oe.e(t.id))},openCircleSettings:function(){return e(oe.p(t.id))},goTo:function(t){return e(Object(m.a)(t))}}}))(Object($.a)((function(e){return{root:{width:"100%",paddingRight:"0px",backgroundColor:e.palette.background.paper},popperOpen:{zIndex:10},popperClose:{pointerEvents:"none",zIndex:0},dialogPaper:{minWidth:400},fullPageXs:Object(_.a)({},e.breakpoints.down("xs"),{width:"100%",height:"100%",margin:0,overflowY:"auto"})}}))(ue)),pe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).circleList=function(){var e=a.props,t=e.circles,n=e.uid,r=[];return t&&t.forEach((function(e,t){r.push(f.a.createElement(de,{key:t,circle:e,id:t,uid:n}))})),r},a.state={},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.t,t=this.circleList();return f.a.createElement("div",{style:{maxWidth:"800px",margin:"40px auto"}},t&&0!==t.length?f.a.createElement("div",null,f.a.createElement("div",{className:"profile__title"},e("yourCircles.title")),f.a.createElement(M.a,null,t),f.a.createElement("div",{style:{height:"24px"}})):"")}}]),t}(h.Component),me=Object(g.c)("translations")(pe),he=Object(b.connect)((function(e,t){return{uid:e.getIn(["authorize","uid"]),circles:e.getIn(["circle","circleList"],{})}}),(function(e,t){return{}}))(me),fe=a(5),ge=function(e){return f.a.createElement(p.a,{component:"div",style:{padding:24}},e.children)},be=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChangeTab=function(e,t){var n=a.props,r=n.goTo,l=n.setHeaderTitle,c=n.t;switch(a.setState({tabIndex:t}),t){case 0:r("/people"),l(c("header.peopleCaption"));break;case 1:r("/people/circles"),l(c("header.circlesCaption"));break;case 2:r("/people/followers"),l(c("header.followersCaption"))}},a.getTabIndexByNav=function(e){switch(e){case"circles":return 1;case"followers":return 2;default:return 0}};var n=a.props.match.params.tab;return a.state={tabIndex:a.getTabIndexByNav(n)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setHeaderTitle,a=e.t;switch(this.props.match.params.tab){case void 0:case"":t(a("header.peopleCaption"));break;case"circles":t(a("header.circlesCaption"));break;case"followers":t(a("header.followersCaption"))}}},{key:"render",value:function(){var e=this.props,t=e.circlesLoaded,a=e.t,n=this.state.tabIndex;return f.a.createElement("div",{style:{margin:"0 auto"}},f.a.createElement(s.a,{position:"static",color:"default"},f.a.createElement(d.a,{indicatorColor:"secondary",onChange:this.handleChangeTab,value:n,centered:!0,textColor:"primary"},f.a.createElement(u.a,{label:a("people.findPeopleTab")}),f.a.createElement(u.a,{label:a("people.followingTab")}),f.a.createElement(u.a,{label:a("people.followersTab")}))),0===n&&f.a.createElement(ge,null,t?f.a.createElement(k,null):""),1===n&&f.a.createElement(ge,null,t?f.a.createElement(R,null):"",t?f.a.createElement(he,null):""),2===n&&f.a.createElement(ge,null,t?f.a.createElement(P,null):""))}}]),t}(h.Component),Ce=Object(g.c)("translations")(be),ve=Object(C.withRouter)(Object(b.connect)((function(e,t){return{uid:e.getIn(["authorize","uid"],0),circlesLoaded:e.getIn(["circle","loaded"])}}),(function(e,t){return{goTo:function(t){return e(Object(m.a)(t))},setHeaderTitle:function(t){return e(fe.setHeaderTitle(t))}}}))(Ce));t.default=ve},551:function(e,t,a){"use strict";var n=a(8),r=a(43),l=a(49),c=a(45),i=a(48),o=a(631),s=a(521),u=a(0),d=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.theme;return d.a.createElement("div",{key:"load-more-progress",className:"g-load-more"},d.a.createElement(s.a,{size:30,thickness:5,style:{color:e.palette.primary.light}}))}}]),t}(u.Component),m=Object(o.a)(p);t.a=m},609:function(e,t,a){"use strict";var n=a(8),r=a(43),l=a(49),c=a(45),i=a(48),o=a(15),s=a(308),u=a(16),d=a(154),p=a.n(d),m=a(610),h=a(202),f=a(179),g=a(0),b=a.n(g),C=a(106),v=a(61),E=a(52),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).styles={followButton:{position:"absolute",bottom:"30px",left:0,right:0},dialog:{width:"",maxWidth:"280px",borderRadius:"4px"}},a.state={circleName:"",disabledCreateCircle:!0,disabledAddToCircle:!0,disabledDoneCircles:!0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.userId,n=t.classes,r=t.user;return b.a.createElement(s.a,{key:a,elevation:1,className:p()("grid-cell",n.paper)},b.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",height:"100%",position:"relative",paddingTop:20}},b.a.createElement("div",{onClick:function(){return e.props.goTo("/".concat(e.props.userId))},style:{cursor:"pointer"}},b.a.createElement(h.a,{fullName:this.props.fullName,fileName:this.props.avatar,size:90})),b.a.createElement("div",{onClick:function(){return e.props.goTo("/".concat(e.props.userId))},className:"people__name",style:{cursor:"pointer"}},b.a.createElement("div",null,this.props.fullName)),b.a.createElement("div",{style:this.styles.followButton},b.a.createElement(m.a,{userId:a,user:r&&r.toJS()}))))}}]),t}(g.Component),j=Object(C.c)("translations")(O),x=Object(v.connect)((function(e,t){var a=E.a.getUserProfileById(e,{userId:t.userId}).toJS();return{avatar:a.avatar||"",fullName:a.fullName||""}}),(function(e,t){return{goTo:function(t){return e(Object(f.a)(t))}}}))(Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{height:254,width:243,margin:10,textAlign:"center",minWidth:230,maxWidth:"257px"},dialogContent:{paddingTop:"5px",padding:"0px 5px 5px 5px"},circleName:{fontSize:"1rem"},space:{height:20},fullPageXs:Object(o.a)({},e.breakpoints.down("xs"),{width:"100%",height:"100%",margin:0,overflowY:"auto"})}}))(j)),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).userList=function(){var e=a.props.uid,t=a.props.users,n=[];return t&&t.forEach((function(t){var a=t.get("userId");e!==a&&n.push(b.a.createElement(x,{key:a,userId:a,user:t}))})),n},a.state={},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return b.a.createElement("div",{className:"grid grid__1of4 grid__space-around"},this.userList())}}]),t}(g.Component);t.a=Object(v.connect)((function(e,t){return{uid:e.getIn(["authorize","uid"],0)}}),(function(e,t){return{}}))(y)},610:function(e,t,a){"use strict";var n=a(8),r=a(43),l=a(49),c=a(45),i=a(86),o=a(48),s=a(800),u=a(760),d=a(177),p=a(1114),m=a(1117),h=a(1116),f=a(696),g=a(524),b=a(474),C=a(528),v=a(531),E=a(530),O=a(16),j=a(522),x=a(534),y=a(605),w=a.n(y),N=a(50),I=a(15),k=a(179),S=a(33),T=a(4),L=a(0),P=a.n(L),B=a(106),F=a(61),R=a(90),M=a(19),D=a(52),_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleDoneAddCircle=function(){var e=a.props,t=e.userId,n=e.addUserToCircle,r=e.selectedCircles,l=e.deleteFollowingUser,c=e.avatar,i=e.fullName;a.state.disabledDoneCircles||(r.count()>0?n(r,{avatar:c,userId:t,fullName:i}):l(t))},a.onFollowUser=function(e){e.preventDefault();var t=a.props,n=t.isFollowed,r=t.followUser,l=t.followingCircle,c=t.userId,i=t.followRequest,o=t.avatar,s=t.fullName;i&&i.status===M.a.Sent||(n?a.onRequestOpenAddCircle():r(l?l.get("id"):c,{avatar:o,userId:c,fullName:s}))},a.onRequestCloseAddCircle=function(){var e=a.props,t=e.setSelectedCircles,n=e.userId,r=e.userBelongCircles,l=e.closeSelectCircles;t(n,r),l(n),a.setState({circleName:"",disabledCreateCircle:!0,disabledAddToCircle:!0,disabledDoneCircles:!0})},a.onRequestOpenAddCircle=function(){var e=a.props,t=e.openSelectCircles,n=e.userId;e.followingCircle&&t(n)},a.onCreateCircle=function(){var e=a.state.circleName;e&&""!==e.trim()&&(a.props.createCircle(a.state.circleName),a.setState({circleName:"",disabledCreateCircle:!0}))},a.handleChangeName=function(e){a.setState({circleName:e.target.value,disabledCreateCircle:void 0===e.target.value||""===e.target.value.trim()})},a.handleSelectCircle=function(e,t,n){var r=a.props,l=r.setSelectedCircles,c=r.selectedCircles,i=r.userId,o=c;if(t)o=c.push(n);else{var s=c.indexOf(n);o=o.remove(s)}l(i,o),a.setState({disabledDoneCircles:!a.selectedCircleChange(o)})},a.circleList=function(){var e=a.props,t=e.circles,n=e.userId,r=e.selectedCircles,l=e.classes,c=e.t,i=[];if(t)return t.forEach((function(e,t){var o=!!r&&r.indexOf(t)>-1,s=e.get("name");i.push(P.a.createElement(C.a,{key:"".concat(t,"-").concat(n),dense:!0,className:l.listItem},P.a.createElement(E.a,{className:l.circleName,primary:"Following"===s?c("userBox.followingLabel"):s}),P.a.createElement(v.a,null,P.a.createElement(u.a,{onChange:function(e,n){return a.handleSelectCircle(e,n,t)},checked:o}))))})),i},a.selectedCircleChange=function(e){var t=!1,n=a.props.userBelongCircles;if(e.count()===n.count())for(var r=0;r<e.count();r++){var l=e.get(r);if(!(n.indexOf(l)>-1)){t=!0;break}}else t=!0;return t},a.state={circleName:"",disabledCreateCircle:!0,disabledAddToCircle:!0,disabledDoneCircles:!0},a.handleChangeName=a.handleChangeName.bind(Object(i.a)(a)),a.onCreateCircle=a.onCreateCircle.bind(Object(i.a)(a)),a.handleDoneAddCircle=a.handleDoneAddCircle.bind(Object(i.a)(a)),a.circleList=a.circleList.bind(Object(i.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.disabledDoneCircles,t=this.props,a=t.isFollowed,n=t.firstBelongCircle,r=t.belongCirclesCount,l=t.followRequest,c=t.userId,i=t.isSelecteCirclesOpen,o=t.addToCircleRequest,u=t.deleteFollowingUserRequest,O=t.classes,y=t.t,N=a?r>1?y("userBox.numberOfCircleButton",{circlesCount:r}):n?n.get("name",y("userBox.followedLabel")):y("userBox.followButton"):y("userBox.followButton");return P.a.createElement(P.a.Fragment,null,P.a.createElement(s.a,{color:"primary",onClick:this.onFollowUser,disabled:!!l&&l.status===M.a.Sent||!!u&&u.status===M.a.Sent},"Following"===N?y("userBox.followingLabel"):N),P.a.createElement(p.a,{PaperProps:{className:O.fullPageXs},key:this.props.userId||0,open:!0===i,onClose:this.onRequestCloseAddCircle},P.a.createElement(h.a,{className:O.dialogContent},P.a.createElement(b.a,null,this.circleList(),P.a.createElement("div",{className:O.space}),P.a.createElement(f.a,null),P.a.createElement(C.a,{key:"'circleName'-".concat(c),dense:!0,className:O.listItem},P.a.createElement(E.a,{primary:P.a.createElement(j.a,{autoFocus:!0,placeholder:y("userBox.groupNamePlaceholder"),onChange:this.handleChangeName,value:this.state.circleName})}),P.a.createElement(v.a,null,P.a.createElement(g.a,{onClick:this.onCreateCircle,disabled:this.state.disabledCreateCircle},P.a.createElement(x.a,{title:y("userBox.createCircleTooltip")},P.a.createElement(w.a,null))))))),P.a.createElement(m.a,null,P.a.createElement(s.a,{color:"primary",disableFocusRipple:!0,disableRipple:!0,onClick:this.onRequestCloseAddCircle,style:{color:d.a[800]}},y("userBox.cancelButton")),P.a.createElement(s.a,{color:"primary",disableFocusRipple:!0,disableRipple:!0,disabled:e||!!o&&o.status===M.a.Sent,onClick:this.handleDoneAddCircle},y("userBox.doneButton")))))}}]),t}(L.Component),U=Object(B.c)("translations")(_);t.a=Object(F.connect)((function(e,t){var a=e.getIn(["circle","circleList"],Object(T.Map)({})),n=e.getIn(["circle","userTies",t.userId,"circleIdList"],Object(T.List)()),r=n.count()>0,l=a.filter((function(e){return e.get("isSystem",!1)&&"Following"===e.get("name")})).toArray()[0][1],c=N.a.createServerRequestId(S.a.CircleFollowUser,t.userId),i=e.getIn(["server","request",c]),o=e.getIn(["circle","selectedCircles",t.userId],[]),s=e.getIn(["circle","ui","openSelecteCircles",t.userId],[]),u=D.a.getUserProfileById(e,{userId:t.userId}).toJS();return{isSelecteCirclesOpen:s,isFollowed:r,selectedCircles:o,circles:a,followingCircle:l,userBelongCircles:n,followRequest:i,belongCirclesCount:n.count()||0,firstBelongCircle:n?a.get(n.get(0),Object(T.Map)({})):Object(T.Map)({}),avatar:u.avatar||"",fullName:u.fullName||""}}),(function(e){return{createCircle:function(t){return e(R.g(t))},addUserToCircle:function(t,a){return e(R.o(t,a))},followUser:function(t,a){return e(R.j(t,a))},deleteFollowingUser:function(t){return e(R.i(t))},setSelectedCircles:function(t,a){return e(R.s(t,a))},removeSelectedCircles:function(t){return e(R.r(t))},openSelectCircles:function(t){return e(R.q(t))},closeSelectCircles:function(t){return e(R.f(t))},goTo:function(t){return e(Object(k.a)(t))}}}))(Object(O.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{height:254,width:243,margin:10,textAlign:"center",minWidth:230,maxWidth:"257px"},dialogContent:{paddingTop:"5px",padding:"0px 5px 5px 5px"},circleName:{fontSize:"1rem"},space:{height:20},fullPageXs:Object(I.a)({},e.breakpoints.down("xs"),{width:"100%",height:"100%",margin:0,overflowY:"auto"}),followButton:{position:"absolute",bottom:"30px",left:0,right:0},dialog:{width:"",maxWidth:"280px",borderRadius:"4px"}}}))(U))}}]);