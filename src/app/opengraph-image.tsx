import {ImageResponse} from 'next/og';
export const alt='Sunday Creative Studio — A Free Online Library';
export const size={width:1200,height:630};export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#f7f3e9',padding:80,flexDirection:'column',justifyContent:'center',color:'#203b32',border:'24px solid #203b32'}}><div style={{fontSize:28,letterSpacing:5}}>SUNDAY CREATIVE STUDIO</div><div style={{display:'flex',flexDirection:'column',fontSize:84,marginTop:35,lineHeight:1.1}}>Your next chapter<br/>starts here.</div><div style={{fontSize:30,marginTop:35,color:'#886b3e'}}>A free online library · Read at your own pace</div></div>,size)}
