import { useState, useEffect, useRef, useCallback } from "react";
import * as API from "./api";

/* ═══════════════════════════════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lilita+One&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Nunito',sans-serif;background:#fff;color:#1A1A1A;overflow-x:hidden;}
h1,h2,h3,h4{font-family:'Lilita One',cursive;}
:root{
  --red:#FF3B3B;--yellow:#FFD200;--blue:#1E90FF;--green:#00C853;
  --purple:#9B30FF;--orange:#FF7A00;--dark:#1A1A1A;--light:#F7F7F7;--border:#EBEBEB;
}
.nav{position:sticky;top:0;z-index:999;background:#fff;border-bottom:2px solid var(--border);
  display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;}
.nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none;}
.nav-logo-text{font-family:'Lilita One',cursive;font-size:24px;color:var(--dark);}
.nav-logo-text span{color:var(--red);}
.nav-menu{display:flex;align-items:center;gap:32px;list-style:none;}
.nav-menu a{font-weight:800;font-size:14px;color:#555;text-decoration:none;
  position:relative;padding-bottom:3px;transition:color .2s;}
.nav-menu a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2.5px;
  background:var(--red);border-radius:2px;transition:width .25s;}
.nav-menu a:hover{color:var(--dark);}
.nav-menu a:hover::after{width:100%;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:none;
  border-radius:50px;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:900;
  transition:transform .15s,box-shadow .15s;}
.btn:hover{transform:translateY(-2px);}
.btn:active{transform:translateY(0);}
.btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}
.btn-primary{background:var(--red);color:#fff;padding:13px 32px;font-size:15px;
  box-shadow:0 4px 16px rgba(255,59,59,.35);}
.btn-primary:hover{box-shadow:0 8px 28px rgba(255,59,59,.45);}
.btn-outline{background:transparent;color:var(--dark);padding:11px 28px;font-size:14px;border:2px solid var(--dark);}
.btn-outline:hover{background:var(--dark);color:#fff;}
.btn-yellow{background:var(--yellow);color:var(--dark);padding:11px 26px;font-size:13px;
  box-shadow:0 4px 14px rgba(255,210,0,.4);}
.btn-sm{padding:8px 18px;font-size:12px;}
.btn-icon{background:var(--light);color:var(--dark);width:42px;height:42px;border-radius:50%;font-size:18px;padding:0;}
.btn-icon:hover{background:var(--border);}
.btn-green{background:var(--green);color:#fff;padding:13px 32px;font-size:15px;box-shadow:0 4px 16px rgba(0,200,83,.35);}

.hero{background:linear-gradient(135deg,#FFF9E6 0%,#FFF0F3 50%,#EEF6FF 100%);
  min-height:88vh;display:flex;align-items:center;padding:80px 48px 60px;
  position:relative;overflow:hidden;}
.hero-content{max-width:560px;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--yellow);color:var(--dark);
  border-radius:50px;padding:6px 16px;font-size:12px;font-weight:900;letter-spacing:.5px;
  text-transform:uppercase;margin-bottom:20px;}
.hero-title{font-size:clamp(42px,7vw,80px);line-height:1.05;color:var(--dark);margin-bottom:18px;}
.hero-title span{color:var(--red);}
.hero-sub{font-size:17px;color:#666;line-height:1.7;margin-bottom:32px;font-weight:600;}
.hero-img{position:absolute;right:-20px;bottom:0;height:95%;max-width:52%;object-fit:contain;
  filter:drop-shadow(0 20px 60px rgba(0,0,0,.12));z-index:1;}

.marquee-wrap{background:var(--dark);padding:14px 0;overflow:hidden;white-space:nowrap;}
@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
.marquee-inner{display:inline-flex;animation:marquee 22s linear infinite;}
.marquee-item{display:inline-flex;align-items:center;gap:12px;padding:0 32px;
  font-size:13px;font-weight:800;color:#fff;letter-spacing:.5px;text-transform:uppercase;}
.marquee-dot{width:6px;height:6px;border-radius:50%;background:var(--yellow);flex-shrink:0;}

.section{padding:80px 48px;}
.section-header{text-align:center;margin-bottom:52px;}
.section-label{display:inline-block;background:var(--yellow);color:var(--dark);border-radius:50px;
  padding:5px 18px;font-size:11px;font-weight:900;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;}
.section-title{font-size:clamp(28px,4vw,44px);color:var(--dark);margin-bottom:10px;}
.section-sub{font-size:15px;color:#888;font-weight:600;}

.cat-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px;}
.cat-tab{padding:9px 22px;border-radius:50px;font-size:13px;font-weight:800;cursor:pointer;
  border:2px solid var(--border);background:#fff;color:#888;transition:all .2s;font-family:'Nunito',sans-serif;}
.cat-tab:hover{border-color:var(--dark);color:var(--dark);}
.cat-tab.active{background:var(--dark);border-color:var(--dark);color:#fff;}

.pcard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
  transition:transform .25s,box-shadow .25s,border-color .25s;display:flex;flex-direction:column;position:relative;}
.pcard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);border-color:#ccc;}
.pcard-img{height:220px;overflow:hidden;background:var(--light);position:relative;}
.pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;display:block;}
.pcard:hover .pcard-img img{transform:scale(1.07);}
.pcard-body{padding:18px 18px 20px;flex:1;display:flex;flex-direction:column;gap:6px;}
.pcard-cat{font-size:11px;font-weight:900;letter-spacing:.8px;text-transform:uppercase;color:#aaa;}
.pcard-name{font-family:'Lilita One',cursive;font-size:17px;color:var(--dark);line-height:1.3;}
.pcard-desc{font-size:12.5px;color:#888;line-height:1.6;flex:1;}
.pcard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:10px;}
.pcard-price{font-family:'Lilita One',cursive;font-size:22px;color:var(--red);}
.pcard-ribbon{position:absolute;top:14px;left:0;color:#fff;font-size:10px;font-weight:900;
  padding:4px 12px;border-radius:0 6px 6px 0;text-transform:uppercase;letter-spacing:.8px;z-index:2;}

.scard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
  transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;}
.scard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);}
.scard-img{height:240px;overflow:hidden;background:var(--light);position:relative;}
.scard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
.scard:hover .scard-img img{transform:scale(1.06);}
.scard-body{padding:20px 22px 24px;flex:1;display:flex;flex-direction:column;gap:8px;}
.scard-name{font-family:'Lilita One',cursive;font-size:19px;color:var(--dark);}
.scard-desc{font-size:13px;color:#888;line-height:1.65;flex:1;}
.scard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;}
.scard-price{font-family:'Lilita One',cursive;font-size:26px;color:var(--red);}

.stars{display:flex;gap:2px;}
.star-f{color:#FFD200;font-size:13px;}
.star-e{color:#DDD;font-size:13px;}

.why-card{background:var(--light);border-radius:20px;padding:32px 24px;text-align:center;
  border:2px solid var(--border);transition:transform .25s,box-shadow .25s;}
.why-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,.08);}
.why-icon{width:72px;height:72px;border-radius:20px;display:flex;align-items:center;
  justify-content:center;font-size:34px;margin:0 auto 16px;}

.testi-card{background:#fff;border-radius:20px;padding:28px 26px;border:2px solid var(--border);
  transition:transform .25s,box-shadow .25s;}
.testi-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(0,0,0,.08);}

.cart-drawer{position:fixed;top:0;right:0;height:100%;width:400px;background:#fff;z-index:1100;
  display:flex;flex-direction:column;box-shadow:-8px 0 40px rgba(0,0,0,.12);
  transition:transform .38s cubic-bezier(.4,0,.2,1);}

.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:1200;
  display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
.modal-box{background:#fff;border-radius:24px;padding:36px 32px;max-width:500px;width:100%;
  max-height:90vh;overflow-y:auto;animation:modalIn .3s ease both;}
@keyframes modalIn{from{opacity:0;transform:translateY(30px) scale(.97);}to{opacity:1;transform:none;}}

.field{margin-bottom:16px;}
.field label{display:block;font-size:13px;font-weight:800;color:#555;margin-bottom:6px;}
.field input,.field select,.field textarea{width:100%;padding:11px 16px;border-radius:12px;
  border:2px solid var(--border);font-size:14px;font-family:'Nunito',sans-serif;
  outline:none;transition:border-color .2s;color:var(--dark);}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--dark);}
.field textarea{resize:vertical;}

.upload-zone{display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;padding:24px 16px;border-radius:14px;cursor:pointer;
  border:2px dashed #ccc;background:var(--light);transition:all .2s;width:100%;}
.upload-zone:hover{border-color:var(--dark);background:#f0f0f0;}

.dash{min-height:100vh;background:var(--light);}
.dash-top{background:#fff;border-bottom:2px solid var(--border);height:68px;
  display:flex;align-items:center;justify-content:space-between;padding:0 32px;
  position:sticky;top:0;z-index:100;}
.dash-body{max-width:1140px;margin:0 auto;padding:36px 20px;}
.stat-card{background:#fff;border-radius:16px;padding:24px 20px;border:2px solid var(--border);}
.stat-val{font-family:'Lilita One',cursive;font-size:32px;}
.stat-label{font-size:13px;color:#888;font-weight:700;margin-top:4px;}
.dash-table{background:#fff;border-radius:18px;border:2px solid var(--border);overflow:hidden;}
.dash-table table{width:100%;border-collapse:collapse;font-family:'Nunito',sans-serif;}
.dash-table thead tr{background:var(--light);border-bottom:2px solid var(--border);}
.dash-table th{padding:14px 18px;font-size:12px;font-weight:900;color:#888;
  text-align:left;letter-spacing:.6px;text-transform:uppercase;}
.dash-table td{padding:14px 18px;border-bottom:1px solid var(--border);}
.dash-table tr:last-child td{border-bottom:none;}
.dash-table tr:hover td{background:#fafafa;}

.chip{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;text-transform:uppercase;}
.status-badge{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;}

.order-card{background:#fff;border-radius:18px;border:2px solid var(--border);padding:22px 24px;
  margin-bottom:16px;transition:box-shadow .2s;}
.order-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.07);}

.tab-bar{display:flex;gap:6px;background:var(--light);border-radius:50px;padding:4px;border:2px solid var(--border);}
.tab-btn{border:none;border-radius:50px;padding:9px 22px;font-size:13px;font-weight:900;
  cursor:pointer;transition:all .2s;font-family:'Nunito',sans-serif;background:transparent;color:#888;}
.tab-btn.active{background:var(--dark);color:#fff;}

.search-wrap{position:relative;flex:1;min-width:180px;}
.search-wrap input{width:100%;padding:10px 16px 10px 40px;border-radius:50px;
  border:2px solid var(--border);font-size:13px;font-family:'Nunito',sans-serif;outline:none;}
.search-wrap input:focus{border-color:var(--dark);}
.search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#aaa;font-size:15px;}

.cta-banner{background:var(--dark);border-radius:28px;padding:60px 48px;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:32px;margin:0 48px 80px;}

.footer{background:var(--dark);padding:60px 48px 28px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
.footer-col-title{font-size:11px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;
  color:rgba(255,255,255,.4);margin-bottom:16px;}
.footer-col a,.footer-col p{display:block;font-size:13.5px;color:rgba(255,255,255,.6);line-height:2.2;text-decoration:none;}
.footer-col a:hover{color:#fff;}

@keyframes fadeUp{from{opacity:0;transform:translateY(36px);}to{opacity:1;transform:translateY(0);}}
@keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-16px);}}
@keyframes spin{from{transform:rotate(0);}to{transform:rotate(360deg);}}
@keyframes toastIn{from{transform:translateY(60px) scale(.9);opacity:0;}to{transform:translateY(0) scale(1);opacity:1;}}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0);opacity:1;}100%{transform:translateY(110vh) rotate(540deg);opacity:0;}}
@keyframes shimmer{0%{background-position:-400px 0;}100%{background-position:400px 0;}}

.reveal{opacity:0;transform:translateY(36px);transition:opacity .6s ease,transform .6s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.float{animation:floatY var(--fd,3.5s) ease-in-out infinite;animation-delay:var(--fdd,0s);}
.spinner{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--red);
  border-radius:50%;animation:spin .7s linear infinite;}
.toast-pop{animation:toastIn .35s ease both;}
.confetti-p{position:fixed;top:-10px;z-index:9999;pointer-events:none;
  animation:confettiFall var(--d,3s) var(--dl,0s) linear forwards;}
.skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);
  background-size:800px 100%;animation:shimmer 1.5s infinite;border-radius:10px;}
.progress-bar-wrap{height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:8px;width:100%;}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--red),var(--orange));border-radius:3px;transition:width .3s;}

::-webkit-scrollbar{width:6px;}
::-webkit-scrollbar-track{background:#f5f5f5;}
::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px;}

@media(max-width:768px){
  .nav{padding:0 20px;}
  .nav-menu{display:none;}
  .nav-menu.open{display:flex;flex-direction:column;gap:0;position:fixed;
    top:72px;left:0;right:0;bottom:0;background:#fff;padding:32px 24px;
    align-items:flex-start;border-top:2px solid var(--border);z-index:998;}
  .nav-menu.open a{font-size:22px;padding:14px 0;border-bottom:1px solid var(--border);width:100%;}
  .hamburger{display:block !important;}
  .hero{padding:90px 24px 60px;flex-direction:column;}
  .hero-img{display:none;}
  .section{padding:60px 20px;}
  .cta-banner{margin:0 20px 60px;padding:40px 28px;}
  .footer{padding:48px 20px 24px;}
  .footer-grid{grid-template-columns:1fr;}
  .cart-drawer{width:100%;}
}
.hamburger{display:none;background:none;border:none;font-size:24px;cursor:pointer;color:var(--dark);}
`;

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════ */
const CATS = ["All","Toys","Balloons","Decoration"];
const TAG_COLORS = {
  Bestseller:{bg:"#FF3B3B",text:"#fff"},
  "Most Booked":{bg:"#9B30FF",text:"#fff"},
  New:{bg:"#00C853",text:"#fff"},
  Popular:{bg:"#1E90FF",text:"#fff"},
  Trending:{bg:"#FF7A00",text:"#fff"},
};
const STATUS_COLORS = {
  placed:           {bg:"#FFF3CD",text:"#856404"},
  confirmed:        {bg:"#D1ECF1",text:"#0C5460"},
  preparing:        {bg:"#E2D9F3",text:"#4A1A8C"},
  out_for_delivery: {bg:"#D4EDDA",text:"#155724"},
  delivered:        {bg:"#D4EDDA",text:"#155724"},
  cancelled:        {bg:"#F8D7DA",text:"#721C24"},
};
const STATUS_LABELS = {
  placed:"Order Placed",confirmed:"Confirmed",preparing:"Preparing",
  out_for_delivery:"Out for Delivery",delivered:"Delivered",cancelled:"Cancelled",
};

/* ═══════════════════════════════════════════════════════════════
   TINY ATOMS
═══════════════════════════════════════════════════════════════ */
function Stars({n=5}){
  return <div className="stars">{[1,2,3,4,5].map(i=><span key={i} className={i<=n?"star-f":"star-e"}>★</span>)}</div>;
}
function Chip({text}){
  if(!text)return null;
  const c=TAG_COLORS[text]||{bg:"#FF3B3B",text:"#fff"};
  return <span className="chip" style={{background:c.bg,color:c.text}}>{text}</span>;
}
function StatusBadge({status}){
  const s=STATUS_COLORS[status]||{bg:"#eee",text:"#555"};
  return <span className="status-badge" style={{background:s.bg,color:s.text}}>{STATUS_LABELS[status]||status}</span>;
}
function Spinner({size=36}){
  return <div className="spinner" style={{width:size,height:size,borderWidth:size>20?3:2}}/>;
}
function Confetti({active}){
  if(!active)return null;
  const cols=["#FF3B3B","#FFD200","#1E90FF","#00C853","#9B30FF","#FF7A00"];
  return Array.from({length:50},(_,i)=>(
    <div key={i} className="confetti-p" style={{left:`${Math.random()*100}%`,background:cols[i%cols.length],
      "--d":`${2+Math.random()*2}s`,"--dl":`${Math.random()}s`,
      width:`${6+Math.random()*8}px`,height:`${8+Math.random()*10}px`,
      borderRadius:Math.random()>.5?"50%":"3px"}}/>
  ));
}

/* ═══════════════════════════════════════════════════════════════
   MODAL & FIELD
═══════════════════════════════════════════════════════════════ */
function Modal({open,onClose,title,children,maxWidth=500}){
  if(!open)return null;
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" style={{maxWidth}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
          <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#1A1A1A"}}>{title}</h3>
          <button onClick={onClose} className="btn btn-icon" style={{width:34,height:34,fontSize:16}}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
function Field({label,value,onChange,type="text",placeholder,as="input",options=[],required=false}){
  const p={value,onChange:e=>onChange(e.target.value),placeholder,required};
  return(
    <div className="field">
      <label>{label}{required&&" *"}</label>
      {as==="select"?<select {...p}>{options.map(o=><option key={o}>{o}</option>)}</select>
      :as==="textarea"?<textarea {...p} rows={3}/>
      :<input type={type} {...p}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   IMAGE UPLOADER  (Cloudinary via backend)
═══════════════════════════════════════════════════════════════ */
function ImageUploader({value,onChange}){
  const [pct,setPct]=useState(0);
  const [busy,setBusy]=useState(false);
  const [err,setErr]=useState("");

  const handle=async file=>{
    if(!file)return;
    setBusy(true);setErr("");setPct(10);
    try{
      const {url}=await API.uploadImage(file);
      onChange(url);
      setPct(100);
    }catch(e){
      // fallback to base64 if API not connected yet
      const reader=new FileReader();
      reader.onload=ev=>{onChange(ev.target.result);};
      reader.readAsDataURL(file);
      setErr("Using local preview (connect backend to save permanently)");
    }
    setBusy(false);setPct(0);
  };

  return(
    <div className="field">
      <label>Product Image</label>
      <label className="upload-zone" htmlFor="img-up">
        {busy
          ?<><Spinner size={32}/><span style={{fontSize:13,fontWeight:700,color:"#666"}}>Uploading… {pct}%</span>
            <div className="progress-bar-wrap"><div className="progress-bar" style={{width:`${pct}%`}}/></div></>
          :<><span style={{fontSize:30}}>📁</span>
            <span style={{fontSize:13,fontWeight:800,color:"#555"}}>Click to upload from your computer</span>
            <span style={{fontSize:11,color:"#aaa"}}>JPG · PNG · WEBP (max 5MB)</span></>
        }
        <input id="img-up" type="file" accept="image/*" style={{display:"none"}}
          onChange={e=>handle(e.target.files[0])} disabled={busy}/>
      </label>
      {err&&<p style={{color:"#FF7A00",fontSize:12,marginTop:6}}>⚠️ {err}</p>}
      <div style={{display:"flex",alignItems:"center",gap:8,margin:"10px 0"}}>
        <div style={{flex:1,height:1,background:"#eee"}}/>
        <span style={{fontSize:11,color:"#bbb",fontWeight:800}}>OR PASTE URL</span>
        <div style={{flex:1,height:1,background:"#eee"}}/>
      </div>
      <input type="text" value={value?.startsWith?.("data:")?"":value||""} onChange={e=>onChange(e.target.value)}
        placeholder="https://images.unsplash.com/…"
        style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"2px solid #eee",
          fontSize:13,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
      {value&&(
        <div style={{position:"relative",marginTop:10}}>
          <img src={value} alt="preview" style={{width:"100%",height:130,objectFit:"cover",
            borderRadius:12,border:"2px solid #eee",display:"block"}}/>
          <button onClick={()=>onChange("")} style={{position:"absolute",top:8,right:8,background:"rgba(0,0,0,.6)",
            border:"none",borderRadius:6,color:"#fff",padding:"4px 9px",cursor:"pointer",fontSize:12,fontWeight:700}}>✕</button>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
═══════════════════════════════════════════════════════════════ */
function useReveal(dep){
  useEffect(()=>{
    const t=setTimeout(()=>{
      const els=document.querySelectorAll(".reveal:not(.visible)");
      const obs=new IntersectionObserver(en=>{
        en.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
      },{threshold:.08,rootMargin:"0px 0px -30px 0px"});
      els.forEach(el=>{
        const r=el.getBoundingClientRect();
        if(r.top<window.innerHeight&&r.bottom>0)el.classList.add("visible");
        else obs.observe(el);
      });
      return()=>obs.disconnect();
    },40);
    return()=>clearTimeout(t);
  },[dep]);
}

/* ═══════════════════════════════════════════════════════════════
   RAZORPAY CHECKOUT
═══════════════════════════════════════════════════════════════ */
function loadRazorpayScript(){
  return new Promise(resolve=>{
    if(document.getElementById("rzp-script")){resolve(true);return;}
    const s=document.createElement("script");
    s.id="rzp-script";
    s.src="https://checkout.razorpay.com/v1/checkout.js";
    s.onload=()=>resolve(true);
    s.onerror=()=>resolve(false);
    document.body.appendChild(s);
  });
}

async function initiateRazorpayPayment({amount, orderDetails, user, onSuccess, onError}){
  const loaded=await loadRazorpayScript();
  if(!loaded){onError("Failed to load Razorpay. Check your internet connection.");return;}

  try{
    const {orderId, key}=await API.createRazorpayOrder(amount);
    const options={
      key,
      amount: amount*100,
      currency:"INR",
      name:"PartyMashup",
      description:"Party Supplies & Decoration",
      image:"https://i.imgur.com/n5tjHFD.png",
      order_id: orderId,
      prefill:{ name:user.name, email:user.email, contact:user.phone||"" },
      theme:{ color:"#FF3B3B" },
      handler: async(response)=>{
        onSuccess({...response, rzpOrderId: orderId});
      },
      modal:{ ondismiss: ()=>onError("Payment cancelled") },
    };
    const rzp=new window.Razorpay(options);
    rzp.open();
  }catch(e){ onError(e.message); }
}

/* ═══════════════════════════════════════════════════════════════
   CART DRAWER
═══════════════════════════════════════════════════════════════ */
function CartDrawer({cart,open,onClose,onRemove,onCheckout}){
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  return(
    <>
      {open&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",zIndex:1099}} onClick={onClose}/>}
      <div className="cart-drawer" style={{transform:open?"translateX(0)":"translateX(100%)"}}>
        <div style={{padding:"24px 24px 18px",borderBottom:"2px solid var(--border)",
          display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22}}>🛍️ Cart <span style={{fontSize:14,fontWeight:700,color:"#aaa"}}>({cart.length})</span></h3>
          <button className="btn btn-icon" onClick={onClose}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"0 24px"}}>
          {cart.length===0
            ?<div style={{textAlign:"center",padding:"60px 0",color:"#bbb"}}>
               <div style={{fontSize:56}}>🛒</div>
               <p style={{marginTop:12,fontWeight:800,fontSize:16}}>Cart is empty</p>
             </div>
            :cart.map(item=>(
              <div key={item.id} style={{display:"flex",gap:14,padding:"14px 0",
                borderBottom:"1px solid var(--border)",alignItems:"center"}}>
                <img src={item.img} alt={item.name}
                  style={{width:58,height:58,objectFit:"cover",borderRadius:10,border:"2px solid var(--border)"}}/>
                <div style={{flex:1}}>
                  <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
                  <p style={{fontSize:13,color:"var(--red)",fontWeight:900}}>₹{item.price} × {item.qty}</p>
                </div>
                <button onClick={()=>onRemove(item.id)}
                  style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"5px 10px",
                    color:"#DC2626",cursor:"pointer",fontWeight:800}}>✕</button>
              </div>
            ))
          }
        </div>
        {cart.length>0&&(
          <div style={{padding:"18px 24px",borderTop:"2px solid var(--border)"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
              <span style={{fontWeight:700,fontSize:16}}>Total</span>
              <span style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
            </div>
            <button className="btn btn-primary" style={{width:"100%",borderRadius:14}} onClick={onCheckout}>
              🛒 Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CHECKOUT MODAL
═══════════════════════════════════════════════════════════════ */
function CheckoutModal({open,onClose,cart,user,onSuccess}){
  const [form,setForm]=useState({address:user?.address||"",eventDate:"",note:""});
  const [payMethod,setPayMethod]=useState("cod");
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);

  const f=v=>setForm(p=>({...p,...v}));

  const handlePlaceOrder=async()=>{
    if(!form.address.trim()){setErr("Please enter delivery address");return;}
    setLoading(true);setErr("");
    const items=cart.map(i=>({itemId:i.id||i._id,name:i.name,img:i.img,price:i.price,qty:i.qty,
      type:i.category?"product":"service"}));
    try{
      if(payMethod==="cod"){
        const order=await API.placeOrder({items,total,address:form.address,
          eventDate:form.eventDate,note:form.note,paymentMethod:"cod"});
        onSuccess(order);
      }else{
        await initiateRazorpayPayment({
          amount:total, orderDetails:{items,total}, user,
          onSuccess:async(rzpRes)=>{
            const order=await API.placeOrder({items,total,address:form.address,
              eventDate:form.eventDate,note:form.note,paymentMethod:"razorpay",
              razorpayOrderId:rzpRes.rzpOrderId});
            await API.verifyPayment({
              razorpay_order_id:rzpRes.razorpay_order_id,
              razorpay_payment_id:rzpRes.razorpay_payment_id,
              razorpay_signature:rzpRes.razorpay_signature,
              orderId:order._id,
            });
            onSuccess(order);
          },
          onError:(msg)=>{setErr(msg);setLoading(false);},
        });
        return;
      }
    }catch(e){setErr(e.message);}
    setLoading(false);
  };

  return(
    <Modal open={open} onClose={onClose} title="🛒 Checkout" maxWidth={520}>
      <div style={{marginBottom:20}}>
        <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>ORDER SUMMARY</p>
        {cart.map(i=>(
          <div key={i.id} style={{display:"flex",justifyContent:"space-between",
            fontSize:13,fontWeight:700,marginBottom:6,color:"#555"}}>
            <span>{i.name} × {i.qty}</span>
            <span>₹{(i.price*i.qty).toLocaleString()}</span>
          </div>
        ))}
        <div style={{borderTop:"2px solid var(--border)",marginTop:10,paddingTop:10,
          display:"flex",justifyContent:"space-between"}}>
          <span style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>Total</span>
          <span style={{fontFamily:"'Lilita One',cursive",fontSize:20,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
        </div>
      </div>

      <Field label="Delivery Address" value={form.address} onChange={v=>f({address:v})}
        as="textarea" placeholder="Full address, area, city…" required/>
      <Field label="Event Date (optional)" value={form.eventDate} onChange={v=>f({eventDate:v})} type="date"/>
      <Field label="Special Instructions (optional)" value={form.note} onChange={v=>f({note:v})}
        as="textarea" placeholder="Theme, no. of guests, indoor/outdoor…"/>

      <div style={{marginBottom:16}}>
        <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>PAYMENT METHOD</p>
        <div style={{display:"flex",gap:10}}>
          {[["cod","💵 Cash on Delivery"],["razorpay","💳 Pay Online (Razorpay)"]].map(([v,l])=>(
            <button key={v} onClick={()=>setPayMethod(v)}
              style={{flex:1,padding:"12px",borderRadius:12,fontWeight:800,fontSize:13,cursor:"pointer",
                fontFamily:"'Nunito',sans-serif",
                background:payMethod===v?"var(--dark)":"var(--light)",
                color:payMethod===v?"#fff":"#555",
                border:`2px solid ${payMethod===v?"var(--dark)":"var(--border)"}`}}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
      <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
        onClick={handlePlaceOrder} disabled={loading}>
        {loading?"Processing…":payMethod==="cod"?"✅ Place Order (COD)":"💳 Pay ₹"+total.toLocaleString()}
      </button>
    </Modal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AUTH MODAL  (login + register)
═══════════════════════════════════════════════════════════════ */
function AuthModal({open,onClose,onAuth}){
  const [mode,setMode]=useState("login");
  const [form,setForm]=useState({name:"",email:"",password:"",phone:""});
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");
  const f=v=>setForm(p=>({...p,...v}));

  const handle=async()=>{
    setLoading(true);setErr("");
    try{
      const data=mode==="login"
        ?await API.login({email:form.email,password:form.password})
        :await API.register({name:form.name,email:form.email,password:form.password,phone:form.phone});
      localStorage.setItem("pm_token",data.token);
      localStorage.setItem("pm_user",JSON.stringify(data.user));
      onAuth(data.user);
      onClose();
    }catch(e){setErr(e.message);}
    setLoading(false);
  };

  return(
    <Modal open={open} onClose={onClose} title={mode==="login"?"🔑 Login":"✨ Create Account"}>
      <div className="tab-bar" style={{marginBottom:20}}>
        {[["login","Login"],["register","Sign Up"]].map(([m,l])=>(
          <button key={m} className={`tab-btn${mode===m?" active":""}`} onClick={()=>{setMode(m);setErr("");}}>
            {l}
          </button>
        ))}
      </div>
      {mode==="register"&&<Field label="Full Name" value={form.name} onChange={v=>f({name:v})} placeholder="Rahul Sharma" required/>}
      <Field label="Email" value={form.email} onChange={v=>f({email:v})} type="email" placeholder="you@email.com" required/>
      {mode==="register"&&<Field label="Phone" value={form.phone} onChange={v=>f({phone:v})} type="tel" placeholder="+91 98765 43210"/>}
      <Field label="Password" value={form.password} onChange={v=>f({password:v})} type="password" placeholder="••••••••" required/>
      {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
      <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
        onClick={handle} disabled={loading}>
        {loading?"Please wait…":mode==="login"?"Login →":"Create Account →"}
      </button>
      <p style={{textAlign:"center",marginTop:14,fontSize:13,color:"#888",fontWeight:700}}>
        {mode==="login"?"Don't have an account? ":"Already have an account? "}
        <span style={{color:"var(--red)",cursor:"pointer"}} onClick={()=>{setMode(mode==="login"?"register":"login");setErr("");}}>
          {mode==="login"?"Sign Up":"Login"}
        </span>
      </p>
    </Modal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MY ORDERS PAGE
═══════════════════════════════════════════════════════════════ */
function MyOrders({onClose}){
  const [orders,setOrders]=useState([]);
  const [loading,setLoading]=useState(true);
  const [cancelling,setCancelling]=useState(null);

  useEffect(()=>{
    API.getMyOrders().then(setOrders).catch(()=>{}).finally(()=>setLoading(false));
  },[]);

  const cancel=async id=>{
    setCancelling(id);
    try{
      const updated=await API.cancelOrder(id);
      setOrders(p=>p.map(o=>o._id===id?updated:o));
    }catch(e){alert(e.message);}
    setCancelling(null);
  };

  return(
    <Modal open={true} onClose={onClose} title="📦 My Orders" maxWidth={680}>
      {loading?<div style={{display:"flex",justifyContent:"center",padding:40}}><Spinner/></div>
      :orders.length===0
        ?<div style={{textAlign:"center",padding:"40px 0",color:"#bbb"}}>
           <div style={{fontSize:56}}>📦</div>
           <p style={{marginTop:12,fontWeight:800,fontSize:16}}>No orders yet!</p>
         </div>
        :orders.map(o=>(
          <div key={o._id} className="order-card">
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:12}}>
              <div>
                <p style={{fontFamily:"'Lilita One',cursive",fontSize:16}}>#{o.orderId}</p>
                <p style={{fontSize:12,color:"#aaa",marginTop:2}}>{new Date(o.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</p>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <StatusBadge status={o.status}/>
                {!["delivered","cancelled"].includes(o.status)&&(
                  <button className="btn btn-sm" style={{background:"#FEE2E2",color:"#DC2626",borderRadius:8}}
                    onClick={()=>cancel(o._id)} disabled={cancelling===o._id}>
                    {cancelling===o._id?"…":"Cancel"}
                  </button>
                )}
              </div>
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
              {o.items.map((item,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8,background:"var(--light)",
                  borderRadius:10,padding:"6px 10px"}}>
                  <img src={item.img} alt={item.name} style={{width:32,height:32,objectFit:"cover",borderRadius:6}}/>
                  <span style={{fontSize:12,fontWeight:700}}>{item.name} ×{item.qty}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:13,color:"#888",fontWeight:700}}>
                {o.paymentMethod==="cod"?"💵 Cash on Delivery":"💳 Online Payment"} · {o.paymentStatus==="paid"?"Paid":"Pending"}
              </span>
              <span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{o.total.toLocaleString()}</span>
            </div>
          </div>
        ))
      }
    </Modal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════════ */
function PCard({item,onAdd,isService}){
  const [added,setAdded]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const handle=()=>{onAdd(item);setAdded(true);setTimeout(()=>setAdded(false),1600);};
  const tc=TAG_COLORS[item.tag];
  return(
    <div className="pcard">
      {item.tag&&<div className="pcard-ribbon" style={{background:tc?.bg||"#FF3B3B",color:tc?.text||"#fff"}}>{item.tag}</div>}
      <div className="pcard-img">
        {!loaded&&<div className="skel" style={{width:"100%",height:"100%"}}/>}
        <img src={item.img} alt={item.name} loading="lazy"
          style={{display:loaded?"block":"none"}}
          onLoad={()=>setLoaded(true)} onError={()=>setLoaded(true)}/>
      </div>
      <div className="pcard-body">
        <p className="pcard-cat">{item.category||"Service"}</p>
        <Stars n={4+(item._id?.charCodeAt?.(item._id.length-1)%2||0)}/>
        <h3 className="pcard-name">{item.name}</h3>
        <p className="pcard-desc">{item.desc}</p>
        <div className="pcard-foot">
          <span className="pcard-price">₹{item.price.toLocaleString()}</span>
          <button className="btn btn-primary btn-sm" onClick={handle}
            style={{background:added?"var(--green)":"",boxShadow:added?"0 4px 14px rgba(0,200,83,.35)":""}}>
            {added?"✓ Added":isService?"Book":"+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CUSTOMER PORTAL
═══════════════════════════════════════════════════════════════ */
function CustomerPortal({user,onAuthOpen,onLogout,onOwnerClick}){
  const [tab,setTab]=useState("products");
  const [cat,setCat]=useState("All");
  const [search,setSearch]=useState("");
  const [products,setProducts]=useState([]);
  const [services,setServices]=useState([]);
  const [loadingData,setLoadingData]=useState(true);
  const [cart,setCart]=useState([]);
  const [cartOpen,setCartOpen]=useState(false);
  const [checkout,setCheckout]=useState(false);
  const [orders,setOrders]=useState(false);
  const [confetti,setConfetti]=useState(false);
  const [toast,setToast]=useState("");
  const [mobileNav,setMobileNav]=useState(false);

  const homeRef=useRef(),productsRef=useRef(),servicesRef=useRef(),contactRef=useRef();

  // Load products & services from backend
  useEffect(()=>{
    setLoadingData(true);
    Promise.all([API.getProducts(),API.getServices()])
      .then(([p,s])=>{setProducts(p);setServices(s);})
      .catch(()=>{}) // silently fails if backend not connected
      .finally(()=>setLoadingData(false));
  },[]);

  const filtered=(tab==="products"?products:services).filter(p=>{
    const mc=tab==="services"||cat==="All"||p.category===cat;
    const ms=p.name.toLowerCase().includes(search.toLowerCase());
    return mc&&ms;
  });

  useReveal(`${tab}|${cat}|${search}|${filtered.length}`);

  const scrollTo=useCallback(r=>{
    setMobileNav(false);
    setTimeout(()=>r?.current?.scrollIntoView({behavior:"smooth",block:"start"}),80);
  },[]);

  const addToCart=item=>{
    setCart(prev=>{
      const id=item._id||item.id;
      const ex=prev.find(i=>(i._id||i.id)===id);
      return ex?prev.map(i=>(i._id||i.id)===id?{...i,qty:i.qty+1}:i):[...prev,{...item,id,qty:1}];
    });
    setToast(`🎉 ${item.name} added!`);
    setTimeout(()=>setToast(""),2200);
  };

  const cartCount=cart.reduce((s,i)=>s+i.qty,0);

  const handleOrderSuccess=order=>{
    setConfetti(true);setTimeout(()=>setConfetti(false),3500);
    setCart([]);setCheckout(false);
    setToast(`🎊 Order #${order.orderId} placed! We'll contact you shortly.`);
    setTimeout(()=>setToast(""),5000);
  };

  return(
    <div style={{background:"#fff"}}>
      <Confetti active={confetti}/>

      {/* NAVBAR */}
      <nav className="nav">
        <a className="nav-logo" onClick={e=>{e.preventDefault();scrollTo(homeRef);}} href="#">
          <div style={{width:38,height:38,background:"#FF3B3B",borderRadius:10,
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🎈</div>
          <span className="nav-logo-text">Party<span>Mashup</span></span>
        </a>
        <ul className={`nav-menu${mobileNav?" open":""}`}>
          {[["Home",homeRef],["Products",productsRef],["Services",servicesRef],["Contact",contactRef]].map(([l,r])=>(
            <li key={l}><a onClick={e=>{e.preventDefault();scrollTo(r);}} href="#">{l}</a></li>
          ))}
          {user?.role==="owner"&&(
            <li><a onClick={e=>{e.preventDefault();onOwnerClick();}} href="#"
              style={{background:"var(--dark)",color:"#FFD200",padding:"8px 18px",borderRadius:50}}>
              ⚙️ Dashboard
            </a></li>
          )}
        </ul>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {user
            ?<div style={{display:"flex",alignItems:"center",gap:8}}>
               {user.role!=="owner"&&(
                 <button className="btn btn-sm btn-outline" onClick={()=>setOrders(true)}>📦 Orders</button>
               )}
               <div style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",
                 background:"var(--light)",borderRadius:50,padding:"6px 14px"}}
                 onClick={onLogout}>
                 <div style={{width:28,height:28,borderRadius:"50%",background:"var(--red)",
                   display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900}}>
                   {user.name[0].toUpperCase()}
                 </div>
                 <span style={{fontSize:13,fontWeight:800,color:"#555"}}>{user.name.split(" ")[0]}</span>
               </div>
             </div>
            :<button className="btn btn-sm btn-outline" onClick={onAuthOpen}>Login / Sign Up</button>
          }
          <button className="btn btn-icon" onClick={()=>setCartOpen(true)} style={{position:"relative",fontSize:20}}>
            🛍️
            {cartCount>0&&<span style={{position:"absolute",top:-4,right:-4,background:"var(--red)",
              color:"#fff",borderRadius:"50%",width:18,height:18,fontSize:10,fontWeight:900,
              display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={()=>setMobileNav(v=>!v)}>{mobileNav?"✕":"☰"}</button>
        </div>
      </nav>

      {/* HERO */}
      <section ref={homeRef} className="hero">
        <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(255,210,0,.15)",top:-60,right:"38%",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:"rgba(255,59,59,.1)",bottom:40,left:"30%",pointerEvents:"none"}}/>
        <div className="hero-content">
          <div className="hero-badge">🎉 Indirapuram's #1 Party Store</div>
          <h1 className="hero-title">Make Every <span>Celebration</span> Unforgettable!</h1>
          <p className="hero-sub">Toys · Foil Balloons · Birthday & Anniversary Decoration<br/>Serving <strong>Indirapuram, Ghaziabad</strong> & nearby areas</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <button className="btn btn-primary" onClick={()=>scrollTo(productsRef)}>🛍️ Shop Now</button>
            <button className="btn btn-outline" onClick={()=>{scrollTo(servicesRef);setTimeout(()=>addToCart&&null,600);}}>🎂 Book Decoration</button>
          </div>
          <div style={{display:"flex",gap:10,marginTop:32,flexWrap:"wrap"}}>
            {["⭐ 500+ Happy Parties","🚚 Same-Day Setup","💳 Pay Online or COD"].map(t=>(
              <span key={t} style={{background:"#fff",borderRadius:50,padding:"8px 16px",fontSize:12,fontWeight:800,boxShadow:"0 3px 14px rgba(0,0,0,.08)"}}>{t}</span>
            ))}
          </div>
        </div>
        <img className="hero-img float" style={{"--fd":"4s"}}
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=85" alt="Party"/>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {[...Array(2)].map((_,ri)=>(
            ["🎈 Foil Balloons","🧸 Kids Toys","🎂 Birthday Decoration","💍 Anniversary Décor","👶 Baby Shower","🎊 Confetti","🎁 Gift Sets","🎪 Event Decoration"].map((t,i)=>(
              <span key={`${ri}-${i}`} className="marquee-item"><span className="marquee-dot"/>{t}</span>
            ))
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section ref={productsRef} className="section">
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <div className="section-header reveal">
            <div className="section-label">Our Collection</div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-sub">Quality toys, balloons & decoration supplies</p>
          </div>
          <div className="reveal" style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
            <div className="tab-bar">
              {[["products","🛍️ Products"],["services","🎪 Decoration"]].map(([t,l])=>(
                <button key={t} onClick={()=>setTab(t)} className={`tab-btn${tab===t?" active":""}`}>{l}</button>
              ))}
            </div>
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products…"/>
            </div>
          </div>
          {tab==="products"&&(
            <div className="cat-tabs reveal">
              {CATS.map(c=><button key={c} onClick={()=>setCat(c)} className={`cat-tab${cat===c?" active":""}`}>{c}</button>)}
            </div>
          )}
          {loadingData
            ?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
               {[1,2,3,4].map(i=><div key={i} style={{borderRadius:20,overflow:"hidden",border:"2px solid #eee"}}>
                 <div className="skel" style={{height:220}}/><div style={{padding:18}}>
                 <div className="skel" style={{height:14,width:"60%",marginBottom:8}}/>
                 <div className="skel" style={{height:20,marginBottom:8}}/>
                 <div className="skel" style={{height:12,width:"80%"}}/></div></div>)}
             </div>
            :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
               {filtered.map((item,i)=>(
                 <div key={item._id||item.id} style={{animation:`fadeUp .4s ease ${i*.055}s both`}}>
                   <PCard item={item} onAdd={addToCart} isService={tab==="services"}/>
                 </div>
               ))}
               {filtered.length===0&&!loadingData&&(
                 <div style={{gridColumn:"1/-1",textAlign:"center",padding:"60px 0",color:"#bbb"}}>
                   <div style={{fontSize:56}}>🔍</div>
                   <p style={{marginTop:12,fontWeight:800,fontSize:18,color:"#999"}}>No results found</p>
                 </div>
               )}
             </div>
          }
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} style={{background:"var(--light)",padding:"80px 48px"}}>
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <div className="section-header reveal">
            <div className="section-label">Decoration Services</div>
            <h2 className="section-title">We Handle Everything 🎉</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:26}}>
            {services.map((svc,i)=>(
              <div key={svc._id} className="scard reveal" style={{position:"relative"}}>
                {svc.tag&&<div className="pcard-ribbon" style={{background:TAG_COLORS[svc.tag]?.bg||"#FF3B3B",color:"#fff",top:16}}>{svc.tag}</div>}
                <div className="scard-img"><img src={svc.img} alt={svc.name}/></div>
                <div className="scard-body">
                  <Chip text={svc.tag}/>
                  <h3 className="scard-name">{svc.name}</h3>
                  <p className="scard-desc">{svc.desc}</p>
                  <div className="scard-foot">
                    <span className="scard-price">₹{svc.price.toLocaleString()}</span>
                    <button className="btn btn-yellow btn-sm" onClick={()=>{
                      if(!user){setCartOpen(false);/* open auth */return;}
                      addToCart(svc);setCartOpen(true);
                    }}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div className="section-header reveal">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">Indirapuram's Most Trusted 💛</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:24}}>
            {[
              {icon:"🎨",title:"Custom Themes",desc:"Personalised décor for every occasion.",c:"#FFF0E6",ic:"#FF7A00"},
              {icon:"⚡",title:"2-Hour Setup",desc:"Full decoration done in under 2 hours.",c:"#E6F4FF",ic:"#1E90FF"},
              {icon:"💰",title:"Best Prices",desc:"Premium quality at unbeatable prices.",c:"#FFFBE6",ic:"#FFD200"},
              {icon:"📸",title:"Photo Backdrops",desc:"Instagram-worthy setups every time.",c:"#F0E6FF",ic:"#9B30FF"},
            ].map(f=>(
              <div key={f.title} className="why-card reveal">
                <div className="why-icon" style={{background:f.c}}>{f.icon}</div>
                <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:19,color:"var(--dark)",marginBottom:8}}>{f.title}</h3>
                <p style={{fontSize:13.5,color:"#888",lineHeight:1.7}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{background:"var(--light)",padding:"80px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div className="section-header reveal">
            <div className="section-label">Reviews</div>
            <h2 className="section-title">Families Love PartyMashup 💬</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:22}}>
            {[
              {name:"Priya Sharma",area:"Vaishali",text:"Stunning birthday decoration! My daughter was over the moon.",n:5,color:"#FF3B3B"},
              {name:"Rohit Gupta",area:"Indirapuram",text:"Great quality foil balloons, super fast delivery. Will order again!",n:5,color:"#1E90FF"},
              {name:"Neha Singh",area:"Kaushambi",text:"Anniversary decoration in under 2 hours. Truly magical experience!",n:5,color:"#9B30FF"},
            ].map(t=>(
              <div key={t.name} className="testi-card reveal">
                <Stars n={t.n}/>
                <p style={{fontSize:14,color:"#555",lineHeight:1.75,margin:"14px 0 18px",fontWeight:600}}>"{t.text}"</p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:t.color,
                    display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#fff",fontSize:18}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{fontWeight:900,fontSize:14}}>{t.name}</p>
                    <p style={{fontSize:12,color:"#aaa"}}>📍 {t.area}, Ghaziabad</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner reveal">
        <div>
          <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:"clamp(26px,4vw,42px)",color:"#fff",marginBottom:8}}>Ready to Make Your Party Amazing?</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,.65)",fontWeight:600}}>Order online or WhatsApp us — we'll plan everything 🎊</p>
        </div>
        <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
          <button className="btn btn-yellow" style={{fontSize:15,padding:"14px 32px"}}
            onClick={()=>window.open("https://wa.me/919876543210","_blank")}>📲 WhatsApp Us</button>
          {!user&&<button className="btn btn-outline" style={{color:"#fff",borderColor:"rgba(255,255,255,.4)",fontSize:15,padding:"14px 32px"}}
            onClick={onAuthOpen}>🔑 Login / Sign Up</button>}
        </div>
      </div>

      {/* FOOTER */}
      <footer ref={contactRef} className="footer">
        <div className="footer-grid">
          <div>
            <div style={{fontFamily:"'Lilita One',cursive",fontSize:24,color:"#fff",marginBottom:12}}>
              Party<span style={{color:"var(--yellow)"}}>Mashup</span>
            </div>
            <p style={{fontSize:14,color:"rgba(255,255,255,.45)",lineHeight:1.8}}>
              Indirapuram's favourite toy & party decoration store. Making every celebration magical since 2018.
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Find Us</p>
            {["Shop 5, Ahinsa Khand-1","Indirapuram, GZB – 201014","📞 +91 98765 43210","⏰ 10 AM – 9 PM Daily"].map(l=><p key={l}>{l}</p>)}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Areas We Serve</p>
            {["Indirapuram","Vaishali","Kaushambi","Rajnagar Ext.","Vasundhara","Crossings Republik"].map(a=><p key={a}>📌 {a}</p>)}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">We Offer</p>
            {["Kids Toys","Foil Balloons","Birthday Decoration","Anniversary Decoration","Baby Shower Décor","Corporate Events"].map(c=><a key={c} href="#">{c}</a>)}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:18,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <p style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>© 2025 PartyMashup, Indirapuram Ghaziabad</p>
          <button onClick={onOwnerClick} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
            color:"rgba(255,255,255,.5)",borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:700,cursor:"pointer"}}>
            👤 Owner Login
          </button>
        </div>
      </footer>

      {/* CART FAB */}
      <button onClick={()=>setCartOpen(true)} style={{position:"fixed",bottom:28,right:28,
        background:"var(--red)",color:"#fff",border:"none",borderRadius:"50%",width:58,height:58,
        fontSize:24,cursor:"pointer",zIndex:800,boxShadow:"0 6px 28px rgba(255,59,59,.5)",
        display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .2s"}}
        onMouseEnter={e=>e.currentTarget.style.transform="scale(1.12)"}
        onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
        🛍️
        {cartCount>0&&<span style={{position:"absolute",top:-3,right:-3,background:"#1A1A1A",
          color:"#fff",borderRadius:"50%",width:20,height:20,fontSize:10,fontWeight:900,
          display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
      </button>

      <CartDrawer cart={cart} open={cartOpen} onClose={()=>setCartOpen(false)}
        onRemove={id=>setCart(p=>p.filter(i=>(i.id||i._id)!==id))}
        onCheckout={()=>{
          if(!user){setCartOpen(false);onAuthOpen();return;}
          setCartOpen(false);setCheckout(true);
        }}/>

      {checkout&&<CheckoutModal open={checkout} onClose={()=>setCheckout(false)}
        cart={cart} user={user} onSuccess={handleOrderSuccess}/>}

      {orders&&<MyOrders onClose={()=>setOrders(false)}/>}

      {toast&&(
        <div className="toast-pop" style={{position:"fixed",bottom:100,left:"50%",transform:"translateX(-50%)",
          background:"#1A1A1A",color:"#fff",padding:"12px 24px",borderRadius:50,fontSize:13,
          fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap",maxWidth:"90vw",textAlign:"center"}}>
          {toast}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OWNER DASHBOARD
═══════════════════════════════════════════════════════════════ */
function OwnerDashboard({user,onLogout}){
  const [tab,setTab]=useState("overview");
  const [products,setProducts]=useState([]);
  const [services,setServices]=useState([]);
  const [orders,setOrders]=useState([]);
  const [stats,setStats]=useState(null);
  const [loading,setLoading]=useState(true);
  const [showForm,setShowForm]=useState(false);
  const [editItem,setEditItem]=useState(null);
  const [delItem,setDelItem]=useState(null);
  const [itemTab,setItemTab]=useState("products");
  const [toast,setToast]=useState("");
  const [fd,setFd]=useState({name:"",category:"Toys",price:"",img:"",desc:"",tag:""});
  const showT=msg=>{setToast(msg);setTimeout(()=>setToast(""),2600);};

  useEffect(()=>{
    Promise.all([API.getAdminStats(),API.getProducts(),API.getServices(),API.getAdminOrders()])
      .then(([s,p,sv,o])=>{setStats(s);setProducts(p);setServices(sv);setOrders(o.orders||[]);})
      .catch(()=>{})
      .finally(()=>setLoading(false));
  },[]);

  const data=itemTab==="products"?products:services;
  const setData=itemTab==="products"?setProducts:setServices;

  const openAdd=()=>{setEditItem(null);setFd({name:"",category:"Toys",price:"",img:"",desc:"",tag:""});setShowForm(true);};
  const openEdit=item=>{setEditItem(item);setFd({name:item.name,category:item.category||"",price:item.price,img:item.img,desc:item.desc,tag:item.tag||""});setShowForm(true);};

  const save=async()=>{
    if(!fd.name||!fd.price)return;
    const payload={name:fd.name,category:fd.category,price:Number(fd.price),img:fd.img,desc:fd.desc,tag:fd.tag};
    try{
      if(editItem){
        const updated=itemTab==="products"
          ?await API.updateProduct(editItem._id,payload)
          :await API.updateService(editItem._id,payload);
        setData(p=>p.map(x=>x._id===editItem._id?updated:x));
        showT("✅ Updated!");
      }else{
        const created=itemTab==="products"
          ?await API.createProduct(payload)
          :await API.createService(payload);
        setData(p=>[created,...p]);
        showT("✅ Added!");
      }
      setShowForm(false);
    }catch(e){showT("❌ "+e.message);}
  };

  const del=async item=>{
    try{
      itemTab==="products"?await API.deleteProduct(item._id):await API.deleteService(item._id);
      setData(p=>p.filter(x=>x._id!==item._id));
      setDelItem(null);showT("🗑️ Deleted.");
    }catch(e){showT("❌ "+e.message);}
  };

  const updateStatus=async(id,status)=>{
    try{
      const updated=await API.updateOrderStatus(id,status);
      setOrders(p=>p.map(o=>o._id===id?updated:o));
      showT("✅ Status updated!");
    }catch(e){showT("❌ "+e.message);}
  };

  const statCards=[
    {label:"Total Orders",value:stats?.totalOrders??0,color:"#FF3B3B",icon:"📦"},
    {label:"Revenue",value:`₹${(stats?.revenue??0).toLocaleString()}`,color:"#00C853",icon:"💰"},
    {label:"Products",value:stats?.totalProducts??products.length,color:"#1E90FF",icon:"🧸"},
    {label:"Customers",value:stats?.totalCustomers??0,color:"#9B30FF",icon:"👥"},
  ];

  return(
    <div className="dash">
      <div className="dash-top">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:34,height:34,background:"#FF3B3B",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎈</div>
          <div>
            <p style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>PartyMashup</p>
            <p style={{fontSize:10,color:"#aaa"}}>Owner Dashboard · {user?.email}</p>
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <div className="tab-bar" style={{display:"flex"}}>
            {[["overview","📊 Overview"],["items","🛍️ Products"],["orders","📦 Orders"]].map(([t,l])=>(
              <button key={t} className={`tab-btn${tab===t?" active":""}`} onClick={()=>setTab(t)}>{l}</button>
            ))}
          </div>
          <button className="btn btn-outline btn-sm" onClick={onLogout}>🚪 Logout</button>
        </div>
      </div>

      <div className="dash-body">
        {loading&&<div style={{display:"flex",justifyContent:"center",padding:60}}><Spinner/></div>}

        {/* OVERVIEW */}
        {!loading&&tab==="overview"&&(
          <>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:16,marginBottom:32}}>
              {statCards.map(s=>(
                <div key={s.label} className="stat-card" style={{borderTop:`3px solid ${s.color}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:32}}>{s.icon}</span>
                    <span className="stat-val" style={{color:s.color}}>{s.value}</span>
                  </div>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
            <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:20,marginBottom:16}}>Recent Orders</h3>
            <div className="dash-table">
              <table>
                <thead><tr>{["Order ID","Customer","Total","Status","Date"].map(h=><th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {(stats?.recentOrders||orders).slice(0,5).map(o=>(
                    <tr key={o._id}>
                      <td style={{fontWeight:800}}>#{o.orderId}</td>
                      <td>{o.customerName||o.customer?.name}</td>
                      <td style={{fontFamily:"'Lilita One',cursive",color:"var(--red)"}}>₹{o.total?.toLocaleString()}</td>
                      <td><StatusBadge status={o.status}/></td>
                      <td style={{color:"#aaa",fontSize:12}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* PRODUCTS / SERVICES */}
        {!loading&&tab==="items"&&(
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
              <div className="tab-bar">
                {[["products","🛍️ Products"],["services","🎪 Services"]].map(([t,l])=>(
                  <button key={t} className={`tab-btn${itemTab===t?" active":""}`} onClick={()=>setItemTab(t)}>{l}</button>
                ))}
              </div>
              <button className="btn btn-primary" onClick={openAdd}>＋ Add {itemTab==="products"?"Product":"Service"}</button>
            </div>
            <div className="dash-table">
              <table>
                <thead><tr>{["Item","Category","Price","Tag","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {data.map(item=>(
                    <tr key={item._id}>
                      <td>
                        <div style={{display:"flex",alignItems:"center",gap:12}}>
                          <img src={item.img||"https://placehold.co/52"} alt={item.name}
                            style={{width:52,height:52,objectFit:"cover",borderRadius:10,border:"2px solid #eee"}}/>
                          <div>
                            <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
                            <p style={{fontSize:12,color:"#aaa",maxWidth:220}}>{item.desc?.slice(0,55)}…</p>
                          </div>
                        </div>
                      </td>
                      <td style={{fontSize:13,color:"#888",fontWeight:700}}>{item.category||"—"}</td>
                      <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{item.price?.toLocaleString()}</span></td>
                      <td><Chip text={item.tag}/></td>
                      <td>
                        <div style={{display:"flex",gap:8}}>
                          <button onClick={()=>openEdit(item)} style={{background:"#EEF2FF",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#4F46E5"}}>✏️ Edit</button>
                          <button onClick={()=>setDelItem(item)} style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#DC2626"}}>🗑️ Del</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No items yet.</p></div>}
            </div>
          </>
        )}

        {/* ORDERS */}
        {!loading&&tab==="orders"&&(
          <>
            <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,marginBottom:20}}>All Orders</h3>
            <div className="dash-table">
              <table>
                <thead><tr>{["Order","Customer","Items","Total","Payment","Status","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {orders.map(o=>(
                    <tr key={o._id}>
                      <td>
                        <p style={{fontWeight:800}}>#{o.orderId}</p>
                        <p style={{fontSize:11,color:"#aaa"}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</p>
                      </td>
                      <td>
                        <p style={{fontWeight:700,fontSize:13}}>{o.customerName||o.customer?.name}</p>
                        <p style={{fontSize:11,color:"#aaa"}}>{o.customerPhone||o.customer?.phone}</p>
                      </td>
                      <td style={{fontSize:12,color:"#888"}}>{o.items?.length} item{o.items?.length!==1?"s":""}</td>
                      <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:16,color:"var(--red)"}}>₹{o.total?.toLocaleString()}</span></td>
                      <td>
                        <span style={{fontSize:11,fontWeight:700,color:o.paymentStatus==="paid"?"var(--green)":"#FF7A00"}}>
                          {o.paymentMethod==="cod"?"COD":"Online"} · {o.paymentStatus}
                        </span>
                      </td>
                      <td><StatusBadge status={o.status}/></td>
                      <td>
                        <select value={o.status} onChange={e=>updateStatus(o._id,e.target.value)}
                          style={{padding:"6px 10px",borderRadius:8,border:"2px solid #eee",fontSize:12,
                            fontFamily:"'Nunito',sans-serif",cursor:"pointer",fontWeight:700}}>
                          {["placed","confirmed","preparing","out_for_delivery","delivered","cancelled"].map(s=>(
                            <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No orders yet.</p></div>}
            </div>
          </>
        )}
      </div>

      {/* ADD/EDIT MODAL */}
      <Modal open={showForm} onClose={()=>setShowForm(false)} title={editItem?"✏️ Edit Item":"➕ Add Item"}>
        <Field label="Name *"       value={fd.name}     onChange={v=>setFd(f=>({...f,name:v}))}     placeholder="e.g. Unicorn Balloon" required/>
        {itemTab==="products"&&<Field label="Category" value={fd.category} onChange={v=>setFd(f=>({...f,category:v}))} as="select" options={["Toys","Balloons","Decoration"]}/>}
        <Field label="Price (₹) *" value={fd.price}    onChange={v=>setFd(f=>({...f,price:v}))}    type="number" placeholder="299" required/>
        <ImageUploader value={fd.img||""} onChange={v=>setFd(f=>({...f,img:v}))}/>
        <Field label="Description"  value={fd.desc}     onChange={v=>setFd(f=>({...f,desc:v}))}     as="textarea" placeholder="Short description…"/>
        <Field label="Badge Tag"    value={fd.tag}      onChange={v=>setFd(f=>({...f,tag:v}))}      placeholder="Bestseller / New / Popular / Trending"/>
        <div style={{display:"flex",gap:10,marginTop:8}}>
          <button className="btn btn-outline" style={{flex:1}} onClick={()=>setShowForm(false)}>Cancel</button>
          <button className="btn btn-primary" style={{flex:2,borderRadius:12}} onClick={save}>
            {editItem?"💾 Save Changes":"➕ Add Item"}
          </button>
        </div>
      </Modal>

      {/* DELETE CONFIRM */}
      <Modal open={!!delItem} onClose={()=>setDelItem(null)} title="🗑️ Confirm Delete">
        <div style={{textAlign:"center",padding:"8px 0 20px"}}>
          {delItem?.img&&<img src={delItem.img} alt="" style={{width:80,height:80,objectFit:"cover",borderRadius:14,margin:"0 auto 14px",display:"block",border:"2px solid #eee"}}/>}
          <p style={{fontWeight:800,fontSize:16}}>{delItem?.name}</p>
          <p style={{color:"#aaa",marginTop:6,fontSize:14}}>This action cannot be undone.</p>
        </div>
        <div style={{display:"flex",gap:10}}>
          <button className="btn btn-outline" style={{flex:1}} onClick={()=>setDelItem(null)}>Cancel</button>
          <button className="btn" style={{flex:1,background:"#DC2626",color:"#fff",borderRadius:50,padding:"11px 0",fontWeight:900,cursor:"pointer",border:"none"}} onClick={()=>del(delItem)}>Yes, Delete</button>
        </div>
      </Modal>

      {toast&&<div className="toast-pop" style={{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",
        background:"#1A1A1A",color:"#fff",padding:"12px 28px",borderRadius:50,fontSize:13,
        fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap"}}>
        {toast}
      </div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function App(){
  const [view,setView]=useState("store");
  const [user,setUser]=useState(()=>{
    try{const u=localStorage.getItem("pm_user");return u?JSON.parse(u):null;}catch{return null;}
  });
  const [authOpen,setAuthOpen]=useState(false);

  // Verify token on load
  useEffect(()=>{
    if(localStorage.getItem("pm_token")){
      API.getMe().then(d=>{
        setUser(d.user);
        localStorage.setItem("pm_user",JSON.stringify(d.user));
      }).catch(()=>{
        localStorage.removeItem("pm_token");
        localStorage.removeItem("pm_user");
        setUser(null);
      });
    }
  },[]);

  useEffect(()=>{
    document.title="PartyMashup – Kids Toys, Foil Balloons & Party Decoration in Indirapuram Ghaziabad";
    [["description","Best kids toys, foil balloons & birthday decoration in Indirapuram Ghaziabad."],
     ["keywords","party decoration Indirapuram, kids toys Indirapuram Ghaziabad, foil balloons, birthday decoration, PartyMashup"],
     ["robots","index, follow"],["geo.region","IN-UP"],["geo.placename","Indirapuram, Ghaziabad"]].forEach(([n,c])=>{
      let el=document.querySelector(`meta[name='${n}']`);
      if(!el){el=document.createElement("meta");el.name=n;document.head.appendChild(el);}
      el.content=c;
    });
  },[]);

  const handleAuth=u=>{
    setUser(u);
    localStorage.setItem("pm_user",JSON.stringify(u));
    if(u.role==="owner")setView("owner");
  };

  const handleLogout=()=>{
    localStorage.removeItem("pm_token");
    localStorage.removeItem("pm_user");
    setUser(null);
    setView("store");
  };

  return(
    <>
      <style>{CSS}</style>
      {view==="store"&&(
        <CustomerPortal user={user} onAuthOpen={()=>setAuthOpen(true)}
          onLogout={handleLogout} onOwnerClick={()=>{
            if(user?.role==="owner")setView("owner");
            else setAuthOpen(true);
          }}/>
      )}
      {view==="owner"&&user?.role==="owner"&&(
        <OwnerDashboard user={user} onLogout={handleLogout}/>
      )}
      <AuthModal open={authOpen} onClose={()=>setAuthOpen(false)} onAuth={handleAuth}/>
    </>
  );
}