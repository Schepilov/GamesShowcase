import React, {Component} from "react"
import "./PanelMobile.css"
import L from "../../lang/L"

export default class PanelMobile extends Component {

	render() {
		let {title, noMargin, noRightPadding, noPaddingBottom, showAll} = this.props
		let style = {}
		if (noMargin) {
			style = {marginBottom: 0}
		}
		if (noRightPadding) {
			style.paddingRight = 0
		}
		if (noPaddingBottom) {
			style.paddingBottom = 0
		}
		return <div className="PanelMobile" style={style}>
			<div className="PanelMobile__title">
				<div className="PanelMobile__title-item">
					{title}
				</div>
				<div className="PanelMobile__title-item">
					{typeof showAll === "function" ? <div className="PanelMobile__link href" onClick={() => this.props.showAll()}>
						{L.t('show_all')}
					</div> : null}
				</div>
			</div>
			{this.props.children ? this.props.children : null}
		</div>
	}
}
