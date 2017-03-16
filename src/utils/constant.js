/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-16 16:28:47
* @Last Modified by:   dlidala
* @Last Modified time: 2017-03-16 16:48:01
*/

// define env base constants
// ex: publickKey, backendAPI

var url = '/api'
var env = process.env.NODE_ENV

// development、staging
var publicKey = 'D6D2402F1C98E208FF2E863AA29334BD65AE1932A821502D9E5673CDE3C713ACFE53E2103CD40ED6BEBB101B484CAE83D537806C6CB611AEE86ED2CA8C97BBE95CF8476066D419E8E833376B850172107844D394016715B2E47E0A6EECB3E83A361FA75FA44693F90D38C6F62029FCD8EA395ED868F9D718293E9C0E63194E87'

// in development mode fetching staging mode data
var arr = location.search.match(new RegExp('\\benv=([^&=]+)')) || []
var isFetchStgData = false
var isFetchProdData = false

if (arr[1] === 'stg') {
  isFetchStgData = true
}

if (arr[1] === 'prod') {
  isFetchProdData = true
}

if (env === 'staging' || isFetchStgData) {
  url = 'https://rsb-stg.pingan.com.cn/brop/noe/cust/mopsf'
}

if (env === 'production' || isFetchProdData) {
  url = 'https://rsb.pingan.com.cn/brop/noe/cust/mopsf'
  publicKey = 'BB955F6C6185B341C1A42EBF1FF9971B273878DBDAB252A0F1C305EBB529E116D807E0108BE6EDD47FF8DC5B6720FFE7F413CBB4ACDFB4C6BE609A5D60F5ADB261690A77755E058D4D9C0EC4FC2F5EB623DEBC88896003FBD8AFC4C3990828C66062A6D6CE509A2B0F8E06C4E332673FB86D235164B62B6110C1F1E0625B20ED'
}

export const baseURL = url
export const rsaKey = publicKey
