import React from 'react'
import VkSdk from "@happysanta/vk-sdk/index"

export function devErrorLog(e) {
	if (process.env.NODE_ENV === 'development') {
		console.error(e)
	}
}

export function devLog(any) {
	if (process.env.NODE_ENV === 'development') {
		console.log(any)
	}
}

export function throwDevError(error) {
	if (process.env.NODE_ENV === 'development') {
		throw error
	}
}

export function isRetina() {
	return window.devicePixelRatio > 1
}


function parseLink(text,pref,cfg = {}) {
	// eslint-disable-next-line
	const regexp = /(\[[a-zA-Z\@\:\/\/\.0-9\-_]+\|.*?\]|<.*?>)/gmu
    let parts = text.split(regexp)
    if (parts.length === 1) {
        return parts[0]
    }
    let res = []
    parts.forEach( (t,i) => {
        if (t.indexOf('[') === 0 && !cfg['noLink']) {
            let tag = t.split('|')
            let href = 'https://vk.com/' + tag[0].replace('[', '')
            let text = tag[1].replace(']', '')
            res.push(<a href={href} target="_blank" key={pref + '_' + i}>{text}</a>)
        } else if (t.indexOf('<') === 0 && !cfg['noStrong']) {
            res.push(<strong key={pref + '_' + i}>{t.substr(1, t.length-2)}</strong>)
        } else {
            res.push(t)
        }
    } )
    return res
}

export function nToBr(string, cfg = {}) {
	string = string || ""
	if (!cfg['noTypography']) {
        string = string.replace(/&shy;/g, "\u00AD")
        string = string.replace(/&nbsp;/g, "\u00A0")
        string = string.replace(/&#8209;/g, "\u2011")
    }
    let stringArray = string.split('\n')
    let length = stringArray.length
    let result = []
    for (let i = 0; i < length; i++) {
		result.push(parseLink(stringArray[i], i, cfg))
        if (i !== length - 1) {
            result.push(<br key={i}/>)
        }
    }
    return result
}

export function getTimeForUser(timeInSeconds, skipHoursIfNeed = false) {
	if (timeInSeconds <= 0) {
		return '0'
	}
	let hours = Math.floor(timeInSeconds / (60 * 60))
	let minutes = Math.floor(timeInSeconds / 60) % 60
	let seconds = Math.floor(timeInSeconds) % 60
	hours = hours < 10 ? '0' + hours : hours
	minutes = minutes < 10 ? '0' + minutes : minutes
	seconds = seconds < 10 ? '0' + seconds : seconds
	if (hours === '00' && skipHoursIfNeed) {
		return minutes + ':' + seconds
	} else {
		return hours + ':' + minutes + ':' + seconds
	}
}

export function getAppLink() {
	let prefix = 'https://vk.com/app'
	if (VkSdk.getStartParams().groupId) {
		return prefix + VkSdk.getStartParams().apiId + '_-' + VkSdk.getStartParams().groupId
	} else {
		return prefix + VkSdk.getStartParams().apiId
	}
}
