// import { useState, useEffect, useRef, useCallback } from "react";
// import * as API from "./api";

// /* ═══════════════════════════════════════════════════════════════
//    GLOBAL CSS
// ═══════════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lilita+One&display=swap');
// *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
// html{scroll-behavior:smooth;}
// body{font-family:'Nunito',sans-serif;background:#fff;color:#1A1A1A;overflow-x:hidden;}
// h1,h2,h3,h4{font-family:'Lilita One',cursive;}
// :root{
//   --red:#FF3B3B;--yellow:#FFD200;--blue:#1E90FF;--green:#00C853;
//   --purple:#9B30FF;--orange:#FF7A00;--dark:#1A1A1A;--light:#F7F7F7;--border:#EBEBEB;
// }
// .nav{position:sticky;top:0;z-index:999;background:#fff;border-bottom:2px solid var(--border);
//   display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;}
// .nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none;}
// .nav-logo-text{font-family:'Lilita One',cursive;font-size:24px;color:var(--dark);}
// .nav-logo-text span{color:var(--red);}
// .nav-menu{display:flex;align-items:center;gap:32px;list-style:none;}
// .nav-menu a{font-weight:800;font-size:14px;color:#555;text-decoration:none;
//   position:relative;padding-bottom:3px;transition:color .2s;}
// .nav-menu a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2.5px;
//   background:var(--red);border-radius:2px;transition:width .25s;}
// .nav-menu a:hover{color:var(--dark);}
// .nav-menu a:hover::after{width:100%;}
// .btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:none;
//   border-radius:50px;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:900;
//   transition:transform .15s,box-shadow .15s;}
// .btn:hover{transform:translateY(-2px);}
// .btn:active{transform:translateY(0);}
// .btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}
// .btn-primary{background:var(--red);color:#fff;padding:13px 32px;font-size:15px;
//   box-shadow:0 4px 16px rgba(255,59,59,.35);}
// .btn-primary:hover{box-shadow:0 8px 28px rgba(255,59,59,.45);}
// .btn-outline{background:transparent;color:var(--dark);padding:11px 28px;font-size:14px;border:2px solid var(--dark);}
// .btn-outline:hover{background:var(--dark);color:#fff;}
// .btn-yellow{background:var(--yellow);color:var(--dark);padding:11px 26px;font-size:13px;
//   box-shadow:0 4px 14px rgba(255,210,0,.4);}
// .btn-sm{padding:8px 18px;font-size:12px;}
// .btn-icon{background:var(--light);color:var(--dark);width:42px;height:42px;border-radius:50%;font-size:18px;padding:0;}
// .btn-icon:hover{background:var(--border);}
// .btn-green{background:var(--green);color:#fff;padding:13px 32px;font-size:15px;box-shadow:0 4px 16px rgba(0,200,83,.35);}

// .hero{background:linear-gradient(135deg,#FFF9E6 0%,#FFF0F3 50%,#EEF6FF 100%);
//   min-height:88vh;display:flex;align-items:center;padding:80px 48px 60px;
//   position:relative;overflow:hidden;}
// .hero-content{max-width:560px;position:relative;z-index:2;}
// .hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--yellow);color:var(--dark);
//   border-radius:50px;padding:6px 16px;font-size:12px;font-weight:900;letter-spacing:.5px;
//   text-transform:uppercase;margin-bottom:20px;}
// .hero-title{font-size:clamp(42px,7vw,80px);line-height:1.05;color:var(--dark);margin-bottom:18px;}
// .hero-title span{color:var(--red);}
// .hero-sub{font-size:17px;color:#666;line-height:1.7;margin-bottom:32px;font-weight:600;}
// .hero-img{position:absolute;right:-20px;bottom:0;height:95%;max-width:52%;object-fit:contain;
//   filter:drop-shadow(0 20px 60px rgba(0,0,0,.12));z-index:1;}

// .marquee-wrap{background:var(--dark);padding:14px 0;overflow:hidden;white-space:nowrap;}
// @keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
// .marquee-inner{display:inline-flex;animation:marquee 22s linear infinite;}
// .marquee-item{display:inline-flex;align-items:center;gap:12px;padding:0 32px;
//   font-size:13px;font-weight:800;color:#fff;letter-spacing:.5px;text-transform:uppercase;}
// .marquee-dot{width:6px;height:6px;border-radius:50%;background:var(--yellow);flex-shrink:0;}

// .section{padding:80px 48px;}
// .section-header{text-align:center;margin-bottom:52px;}
// .section-label{display:inline-block;background:var(--yellow);color:var(--dark);border-radius:50px;
//   padding:5px 18px;font-size:11px;font-weight:900;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;}
// .section-title{font-size:clamp(28px,4vw,44px);color:var(--dark);margin-bottom:10px;}
// .section-sub{font-size:15px;color:#888;font-weight:600;}

// .cat-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px;}
// .cat-tab{padding:9px 22px;border-radius:50px;font-size:13px;font-weight:800;cursor:pointer;
//   border:2px solid var(--border);background:#fff;color:#888;transition:all .2s;font-family:'Nunito',sans-serif;}
// .cat-tab:hover{border-color:var(--dark);color:var(--dark);}
// .cat-tab.active{background:var(--dark);border-color:var(--dark);color:#fff;}

// .pcard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s,border-color .25s;display:flex;flex-direction:column;position:relative;}
// .pcard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);border-color:#ccc;}
// .pcard-img{height:220px;overflow:hidden;background:var(--light);position:relative;}
// .pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;display:block;}
// .pcard:hover .pcard-img img{transform:scale(1.07);}
// .pcard-body{padding:18px 18px 20px;flex:1;display:flex;flex-direction:column;gap:6px;}
// .pcard-cat{font-size:11px;font-weight:900;letter-spacing:.8px;text-transform:uppercase;color:#aaa;}
// .pcard-name{font-family:'Lilita One',cursive;font-size:17px;color:var(--dark);line-height:1.3;}
// .pcard-desc{font-size:12.5px;color:#888;line-height:1.6;flex:1;}
// .pcard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:10px;}
// .pcard-price{font-family:'Lilita One',cursive;font-size:22px;color:var(--red);}
// .pcard-ribbon{position:absolute;top:14px;left:0;color:#fff;font-size:10px;font-weight:900;
//   padding:4px 12px;border-radius:0 6px 6px 0;text-transform:uppercase;letter-spacing:.8px;z-index:2;}

// .scard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;}
// .scard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);}
// .scard-img{height:240px;overflow:hidden;background:var(--light);position:relative;}
// .scard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
// .scard:hover .scard-img img{transform:scale(1.06);}
// .scard-body{padding:20px 22px 24px;flex:1;display:flex;flex-direction:column;gap:8px;}
// .scard-name{font-family:'Lilita One',cursive;font-size:19px;color:var(--dark);}
// .scard-desc{font-size:13px;color:#888;line-height:1.65;flex:1;}
// .scard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;}
// .scard-price{font-family:'Lilita One',cursive;font-size:26px;color:var(--red);}

// .stars{display:flex;gap:2px;}
// .star-f{color:#FFD200;font-size:13px;}
// .star-e{color:#DDD;font-size:13px;}

// .why-card{background:var(--light);border-radius:20px;padding:32px 24px;text-align:center;
//   border:2px solid var(--border);transition:transform .25s,box-shadow .25s;}
// .why-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,.08);}
// .why-icon{width:72px;height:72px;border-radius:20px;display:flex;align-items:center;
//   justify-content:center;font-size:34px;margin:0 auto 16px;}

// .testi-card{background:#fff;border-radius:20px;padding:28px 26px;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s;}
// .testi-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(0,0,0,.08);}

// .cart-drawer{position:fixed;top:0;right:0;height:100%;width:400px;background:#fff;z-index:1100;
//   display:flex;flex-direction:column;box-shadow:-8px 0 40px rgba(0,0,0,.12);
//   transition:transform .38s cubic-bezier(.4,0,.2,1);}

// .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:1200;
//   display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
// .modal-box{background:#fff;border-radius:24px;padding:36px 32px;max-width:500px;width:100%;
//   max-height:90vh;overflow-y:auto;animation:modalIn .3s ease both;}
// @keyframes modalIn{from{opacity:0;transform:translateY(30px) scale(.97);}to{opacity:1;transform:none;}}

// .field{margin-bottom:16px;}
// .field label{display:block;font-size:13px;font-weight:800;color:#555;margin-bottom:6px;}
// .field input,.field select,.field textarea{width:100%;padding:11px 16px;border-radius:12px;
//   border:2px solid var(--border);font-size:14px;font-family:'Nunito',sans-serif;
//   outline:none;transition:border-color .2s;color:var(--dark);}
// .field input:focus,.field select:focus,.field textarea:focus{border-color:var(--dark);}
// .field textarea{resize:vertical;}

// .upload-zone{display:flex;flex-direction:column;align-items:center;justify-content:center;
//   gap:8px;padding:24px 16px;border-radius:14px;cursor:pointer;
//   border:2px dashed #ccc;background:var(--light);transition:all .2s;width:100%;}
// .upload-zone:hover{border-color:var(--dark);background:#f0f0f0;}

// .dash{min-height:100vh;background:var(--light);}
// .dash-top{background:#fff;border-bottom:2px solid var(--border);height:68px;
//   display:flex;align-items:center;justify-content:space-between;padding:0 32px;
//   position:sticky;top:0;z-index:100;}
// .dash-body{max-width:1140px;margin:0 auto;padding:36px 20px;}
// .stat-card{background:#fff;border-radius:16px;padding:24px 20px;border:2px solid var(--border);}
// .stat-val{font-family:'Lilita One',cursive;font-size:32px;}
// .stat-label{font-size:13px;color:#888;font-weight:700;margin-top:4px;}
// .dash-table{background:#fff;border-radius:18px;border:2px solid var(--border);overflow:hidden;}
// .dash-table table{width:100%;border-collapse:collapse;font-family:'Nunito',sans-serif;}
// .dash-table thead tr{background:var(--light);border-bottom:2px solid var(--border);}
// .dash-table th{padding:14px 18px;font-size:12px;font-weight:900;color:#888;
//   text-align:left;letter-spacing:.6px;text-transform:uppercase;}
// .dash-table td{padding:14px 18px;border-bottom:1px solid var(--border);}
// .dash-table tr:last-child td{border-bottom:none;}
// .dash-table tr:hover td{background:#fafafa;}

// .chip{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;text-transform:uppercase;}
// .status-badge{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;}

// .order-card{background:#fff;border-radius:18px;border:2px solid var(--border);padding:22px 24px;
//   margin-bottom:16px;transition:box-shadow .2s;}
// .order-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.07);}

// .tab-bar{display:flex;gap:6px;background:var(--light);border-radius:50px;padding:4px;border:2px solid var(--border);}
// .tab-btn{border:none;border-radius:50px;padding:9px 22px;font-size:13px;font-weight:900;
//   cursor:pointer;transition:all .2s;font-family:'Nunito',sans-serif;background:transparent;color:#888;}
// .tab-btn.active{background:var(--dark);color:#fff;}

// .search-wrap{position:relative;flex:1;min-width:180px;}
// .search-wrap input{width:100%;padding:10px 16px 10px 40px;border-radius:50px;
//   border:2px solid var(--border);font-size:13px;font-family:'Nunito',sans-serif;outline:none;}
// .search-wrap input:focus{border-color:var(--dark);}
// .search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#aaa;font-size:15px;}

// .cta-banner{background:var(--dark);border-radius:28px;padding:60px 48px;
//   display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:32px;margin:0 48px 80px;}

// .footer{background:var(--dark);padding:60px 48px 28px;}
// .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
// .footer-col-title{font-size:11px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;
//   color:rgba(255,255,255,.4);margin-bottom:16px;}
// .footer-col a,.footer-col p{display:block;font-size:13.5px;color:rgba(255,255,255,.6);line-height:2.2;text-decoration:none;}
// .footer-col a:hover{color:#fff;}

// @keyframes fadeUp{from{opacity:0;transform:translateY(36px);}to{opacity:1;transform:translateY(0);}}
// @keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-16px);}}
// @keyframes spin{from{transform:rotate(0);}to{transform:rotate(360deg);}}
// @keyframes toastIn{from{transform:translateY(60px) scale(.9);opacity:0;}to{transform:translateY(0) scale(1);opacity:1;}}
// @keyframes confettiFall{0%{transform:translateY(-10px) rotate(0);opacity:1;}100%{transform:translateY(110vh) rotate(540deg);opacity:0;}}
// @keyframes shimmer{0%{background-position:-400px 0;}100%{background-position:400px 0;}}

// .reveal{opacity:0;transform:translateY(36px);transition:opacity .6s ease,transform .6s ease;}
// .reveal.visible{opacity:1;transform:translateY(0);}
// .float{animation:floatY var(--fd,3.5s) ease-in-out infinite;animation-delay:var(--fdd,0s);}
// .spinner{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--red);
//   border-radius:50%;animation:spin .7s linear infinite;}
// .toast-pop{animation:toastIn .35s ease both;}
// .confetti-p{position:fixed;top:-10px;z-index:9999;pointer-events:none;
//   animation:confettiFall var(--d,3s) var(--dl,0s) linear forwards;}
// .skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);
//   background-size:800px 100%;animation:shimmer 1.5s infinite;border-radius:10px;}
// .progress-bar-wrap{height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:8px;width:100%;}
// .progress-bar{height:100%;background:linear-gradient(90deg,var(--red),var(--orange));border-radius:3px;transition:width .3s;}

// ::-webkit-scrollbar{width:6px;}
// ::-webkit-scrollbar-track{background:#f5f5f5;}
// ::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px;}

// @media(max-width:768px){
//   .nav{padding:0 20px;}
//   .nav-menu{display:none;}
//   .nav-menu.open{display:flex;flex-direction:column;gap:0;position:fixed;
//     top:72px;left:0;right:0;bottom:0;background:#fff;padding:32px 24px;
//     align-items:flex-start;border-top:2px solid var(--border);z-index:998;}
//   .nav-menu.open a{font-size:22px;padding:14px 0;border-bottom:1px solid var(--border);width:100%;}
//   .hamburger{display:block !important;}
//   .hero{padding:90px 24px 60px;flex-direction:column;}
//   .hero-img{display:none;}
//   .section{padding:60px 20px;}
//   .cta-banner{margin:0 20px 60px;padding:40px 28px;}
//   .footer{padding:48px 20px 24px;}
//   .footer-grid{grid-template-columns:1fr;}
//   .cart-drawer{width:100%;}
// }
// .hamburger{display:none;background:none;border:none;font-size:24px;cursor:pointer;color:var(--dark);}
// `;

// /* ═══════════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════════ */
// const CATS = ["All","Toys","Balloons","Decoration"];
// const TAG_COLORS = {
//   Bestseller:{bg:"#FF3B3B",text:"#fff"},
//   "Most Booked":{bg:"#9B30FF",text:"#fff"},
//   New:{bg:"#00C853",text:"#fff"},
//   Popular:{bg:"#1E90FF",text:"#fff"},
//   Trending:{bg:"#FF7A00",text:"#fff"},
// };
// const STATUS_COLORS = {
//   placed:           {bg:"#FFF3CD",text:"#856404"},
//   confirmed:        {bg:"#D1ECF1",text:"#0C5460"},
//   preparing:        {bg:"#E2D9F3",text:"#4A1A8C"},
//   out_for_delivery: {bg:"#D4EDDA",text:"#155724"},
//   delivered:        {bg:"#D4EDDA",text:"#155724"},
//   cancelled:        {bg:"#F8D7DA",text:"#721C24"},
// };
// const STATUS_LABELS = {
//   placed:"Order Placed",confirmed:"Confirmed",preparing:"Preparing",
//   out_for_delivery:"Out for Delivery",delivered:"Delivered",cancelled:"Cancelled",
// };

// /* ═══════════════════════════════════════════════════════════════
//    TINY ATOMS
// ═══════════════════════════════════════════════════════════════ */
// function Stars({n=5}){
//   return <div className="stars">{[1,2,3,4,5].map(i=><span key={i} className={i<=n?"star-f":"star-e"}>★</span>)}</div>;
// }
// function Chip({text}){
//   if(!text)return null;
//   const c=TAG_COLORS[text]||{bg:"#FF3B3B",text:"#fff"};
//   return <span className="chip" style={{background:c.bg,color:c.text}}>{text}</span>;
// }
// function StatusBadge({status}){
//   const s=STATUS_COLORS[status]||{bg:"#eee",text:"#555"};
//   return <span className="status-badge" style={{background:s.bg,color:s.text}}>{STATUS_LABELS[status]||status}</span>;
// }
// function Spinner({size=36}){
//   return <div className="spinner" style={{width:size,height:size,borderWidth:size>20?3:2}}/>;
// }
// function Confetti({active}){
//   if(!active)return null;
//   const cols=["#FF3B3B","#FFD200","#1E90FF","#00C853","#9B30FF","#FF7A00"];
//   return Array.from({length:50},(_,i)=>(
//     <div key={i} className="confetti-p" style={{left:`${Math.random()*100}%`,background:cols[i%cols.length],
//       "--d":`${2+Math.random()*2}s`,"--dl":`${Math.random()}s`,
//       width:`${6+Math.random()*8}px`,height:`${8+Math.random()*10}px`,
//       borderRadius:Math.random()>.5?"50%":"3px"}}/>
//   ));
// }

// /* ═══════════════════════════════════════════════════════════════
//    MODAL & FIELD
// ═══════════════════════════════════════════════════════════════ */
// function Modal({open,onClose,title,children,maxWidth=500}){
//   if(!open)return null;
//   return(
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-box" style={{maxWidth}} onClick={e=>e.stopPropagation()}>
//         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
//           <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#1A1A1A"}}>{title}</h3>
//           <button onClick={onClose} className="btn btn-icon" style={{width:34,height:34,fontSize:16}}>✕</button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }
// function Field({label,value,onChange,type="text",placeholder,as="input",options=[],required=false}){
//   const p={value,onChange:e=>onChange(e.target.value),placeholder,required};
//   return(
//     <div className="field">
//       <label>{label}{required&&" *"}</label>
//       {as==="select"?<select {...p}>{options.map(o=><option key={o}>{o}</option>)}</select>
//       :as==="textarea"?<textarea {...p} rows={3}/>
//       :<input type={type} {...p}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    IMAGE UPLOADER  (Cloudinary via backend)
// ═══════════════════════════════════════════════════════════════ */
// function ImageUploader({value,onChange}){
//   const [pct,setPct]=useState(0);
//   const [busy,setBusy]=useState(false);
//   const [err,setErr]=useState("");

//   const handle=async file=>{
//     if(!file)return;
//     setBusy(true);setErr("");setPct(10);
//     try{
//       const {url}=await API.uploadImage(file);
//       onChange(url);
//       setPct(100);
//     }catch(e){
//       // fallback to base64 if API not connected yet
//       const reader=new FileReader();
//       reader.onload=ev=>{onChange(ev.target.result);};
//       reader.readAsDataURL(file);
//       setErr("Using local preview (connect backend to save permanently)");
//     }
//     setBusy(false);setPct(0);
//   };

//   return(
//     <div className="field">
//       <label>Product Image</label>
//       <label className="upload-zone" htmlFor="img-up">
//         {busy
//           ?<><Spinner size={32}/><span style={{fontSize:13,fontWeight:700,color:"#666"}}>Uploading… {pct}%</span>
//             <div className="progress-bar-wrap"><div className="progress-bar" style={{width:`${pct}%`}}/></div></>
//           :<><span style={{fontSize:30}}>📁</span>
//             <span style={{fontSize:13,fontWeight:800,color:"#555"}}>Click to upload from your computer</span>
//             <span style={{fontSize:11,color:"#aaa"}}>JPG · PNG · WEBP (max 5MB)</span></>
//         }
//         <input id="img-up" type="file" accept="image/*" style={{display:"none"}}
//           onChange={e=>handle(e.target.files[0])} disabled={busy}/>
//       </label>
//       {err&&<p style={{color:"#FF7A00",fontSize:12,marginTop:6}}>⚠️ {err}</p>}
//       <div style={{display:"flex",alignItems:"center",gap:8,margin:"10px 0"}}>
//         <div style={{flex:1,height:1,background:"#eee"}}/>
//         <span style={{fontSize:11,color:"#bbb",fontWeight:800}}>OR PASTE URL</span>
//         <div style={{flex:1,height:1,background:"#eee"}}/>
//       </div>
//       <input type="text" value={value?.startsWith?.("data:")?"":value||""} onChange={e=>onChange(e.target.value)}
//         placeholder="https://images.unsplash.com/…"
//         style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"2px solid #eee",
//           fontSize:13,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
//       {value&&(
//         <div style={{position:"relative",marginTop:10}}>
//           <img src={value} alt="preview" style={{width:"100%",height:130,objectFit:"cover",
//             borderRadius:12,border:"2px solid #eee",display:"block"}}/>
//           <button onClick={()=>onChange("")} style={{position:"absolute",top:8,right:8,background:"rgba(0,0,0,.6)",
//             border:"none",borderRadius:6,color:"#fff",padding:"4px 9px",cursor:"pointer",fontSize:12,fontWeight:700}}>✕</button>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    SCROLL REVEAL HOOK
// ═══════════════════════════════════════════════════════════════ */
// function useReveal(dep){
//   useEffect(()=>{
//     const t=setTimeout(()=>{
//       const els=document.querySelectorAll(".reveal:not(.visible)");
//       const obs=new IntersectionObserver(en=>{
//         en.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
//       },{threshold:.08,rootMargin:"0px 0px -30px 0px"});
//       els.forEach(el=>{
//         const r=el.getBoundingClientRect();
//         if(r.top<window.innerHeight&&r.bottom>0)el.classList.add("visible");
//         else obs.observe(el);
//       });
//       return()=>obs.disconnect();
//     },40);
//     return()=>clearTimeout(t);
//   },[dep]);
// }

// /* ═══════════════════════════════════════════════════════════════
//    RAZORPAY CHECKOUT
// ═══════════════════════════════════════════════════════════════ */
// function loadRazorpayScript(){
//   return new Promise(resolve=>{
//     if(document.getElementById("rzp-script")){resolve(true);return;}
//     const s=document.createElement("script");
//     s.id="rzp-script";
//     s.src="https://checkout.razorpay.com/v1/checkout.js";
//     s.onload=()=>resolve(true);
//     s.onerror=()=>resolve(false);
//     document.body.appendChild(s);
//   });
// }

// async function initiateRazorpayPayment({amount, orderDetails, user, onSuccess, onError}){
//   const loaded=await loadRazorpayScript();
//   if(!loaded){onError("Failed to load Razorpay. Check your internet connection.");return;}

//   try{
//     const {orderId, key}=await API.createRazorpayOrder(amount);
//     const options={
//       key,
//       amount: amount*100,
//       currency:"INR",
//       name:"PartyMashup",
//       description:"Party Supplies & Decoration",
//       image:"https://i.imgur.com/n5tjHFD.png",
//       order_id: orderId,
//       prefill:{ name:user.name, email:user.email, contact:user.phone||"" },
//       theme:{ color:"#FF3B3B" },
//       handler: async(response)=>{
//         onSuccess({...response, rzpOrderId: orderId});
//       },
//       modal:{ ondismiss: ()=>onError("Payment cancelled") },
//     };
//     const rzp=new window.Razorpay(options);
//     rzp.open();
//   }catch(e){ onError(e.message); }
// }

// /* ═══════════════════════════════════════════════════════════════
//    CART DRAWER
// ═══════════════════════════════════════════════════════════════ */
// function CartDrawer({cart,open,onClose,onRemove,onCheckout}){
//   const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
//   return(
//     <>
//       {open&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",zIndex:1099}} onClick={onClose}/>}
//       <div className="cart-drawer" style={{transform:open?"translateX(0)":"translateX(100%)"}}>
//         <div style={{padding:"24px 24px 18px",borderBottom:"2px solid var(--border)",
//           display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22}}>🛍️ Cart <span style={{fontSize:14,fontWeight:700,color:"#aaa"}}>({cart.length})</span></h3>
//           <button className="btn btn-icon" onClick={onClose}>✕</button>
//         </div>
//         <div style={{flex:1,overflowY:"auto",padding:"0 24px"}}>
//           {cart.length===0
//             ?<div style={{textAlign:"center",padding:"60px 0",color:"#bbb"}}>
//                <div style={{fontSize:56}}>🛒</div>
//                <p style={{marginTop:12,fontWeight:800,fontSize:16}}>Cart is empty</p>
//              </div>
//             :cart.map(item=>(
//               <div key={item.id} style={{display:"flex",gap:14,padding:"14px 0",
//                 borderBottom:"1px solid var(--border)",alignItems:"center"}}>
//                 <img src={item.img} alt={item.name}
//                   style={{width:58,height:58,objectFit:"cover",borderRadius:10,border:"2px solid var(--border)"}}/>
//                 <div style={{flex:1}}>
//                   <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
//                   <p style={{fontSize:13,color:"var(--red)",fontWeight:900}}>₹{item.price} × {item.qty}</p>
//                 </div>
//                 <button onClick={()=>onRemove(item.id)}
//                   style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"5px 10px",
//                     color:"#DC2626",cursor:"pointer",fontWeight:800}}>✕</button>
//               </div>
//             ))
//           }
//         </div>
//         {cart.length>0&&(
//           <div style={{padding:"18px 24px",borderTop:"2px solid var(--border)"}}>
//             <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
//               <span style={{fontWeight:700,fontSize:16}}>Total</span>
//               <span style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
//             </div>
//             <button className="btn btn-primary" style={{width:"100%",borderRadius:14}} onClick={onCheckout}>
//               🛒 Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    CHECKOUT MODAL
// ═══════════════════════════════════════════════════════════════ */
// function CheckoutModal({open,onClose,cart,user,onSuccess}){
//   const [form,setForm]=useState({address:user?.address||"",eventDate:"",note:""});
//   const [payMethod,setPayMethod]=useState("cod");
//   const [loading,setLoading]=useState(false);
//   const [err,setErr]=useState("");
//   const total=cart.reduce((s,i)=>s+i.price*i.qty,0);

//   const f=v=>setForm(p=>({...p,...v}));

//   const handlePlaceOrder=async()=>{
//     if(!form.address.trim()){setErr("Please enter delivery address");return;}
//     setLoading(true);setErr("");
//     const items=cart.map(i=>({itemId:i.id||i._id,name:i.name,img:i.img,price:i.price,qty:i.qty,
//       type:i.category?"product":"service"}));
//     try{
//       if(payMethod==="cod"){
//         const order=await API.placeOrder({items,total,address:form.address,
//           eventDate:form.eventDate,note:form.note,paymentMethod:"cod"});
//         onSuccess(order);
//       }else{
//         await initiateRazorpayPayment({
//           amount:total, orderDetails:{items,total}, user,
//           onSuccess:async(rzpRes)=>{
//             const order=await API.placeOrder({items,total,address:form.address,
//               eventDate:form.eventDate,note:form.note,paymentMethod:"razorpay",
//               razorpayOrderId:rzpRes.rzpOrderId});
//             await API.verifyPayment({
//               razorpay_order_id:rzpRes.razorpay_order_id,
//               razorpay_payment_id:rzpRes.razorpay_payment_id,
//               razorpay_signature:rzpRes.razorpay_signature,
//               orderId:order._id,
//             });
//             onSuccess(order);
//           },
//           onError:(msg)=>{setErr(msg);setLoading(false);},
//         });
//         return;
//       }
//     }catch(e){setErr(e.message);}
//     setLoading(false);
//   };

//   return(
//     <Modal open={open} onClose={onClose} title="🛒 Checkout" maxWidth={520}>
//       <div style={{marginBottom:20}}>
//         <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>ORDER SUMMARY</p>
//         {cart.map(i=>(
//           <div key={i.id} style={{display:"flex",justifyContent:"space-between",
//             fontSize:13,fontWeight:700,marginBottom:6,color:"#555"}}>
//             <span>{i.name} × {i.qty}</span>
//             <span>₹{(i.price*i.qty).toLocaleString()}</span>
//           </div>
//         ))}
//         <div style={{borderTop:"2px solid var(--border)",marginTop:10,paddingTop:10,
//           display:"flex",justifyContent:"space-between"}}>
//           <span style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>Total</span>
//           <span style={{fontFamily:"'Lilita One',cursive",fontSize:20,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
//         </div>
//       </div>

//       <Field label="Delivery Address" value={form.address} onChange={v=>f({address:v})}
//         as="textarea" placeholder="Full address, area, city…" required/>
//       <Field label="Event Date (optional)" value={form.eventDate} onChange={v=>f({eventDate:v})} type="date"/>
//       <Field label="Special Instructions (optional)" value={form.note} onChange={v=>f({note:v})}
//         as="textarea" placeholder="Theme, no. of guests, indoor/outdoor…"/>

//       <div style={{marginBottom:16}}>
//         <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>PAYMENT METHOD</p>
//         <div style={{display:"flex",gap:10}}>
//           {[["cod","💵 Cash on Delivery"],["razorpay","💳 Pay Online (Razorpay)"]].map(([v,l])=>(
//             <button key={v} onClick={()=>setPayMethod(v)}
//               style={{flex:1,padding:"12px",borderRadius:12,fontWeight:800,fontSize:13,cursor:"pointer",
//                 fontFamily:"'Nunito',sans-serif",
//                 background:payMethod===v?"var(--dark)":"var(--light)",
//                 color:payMethod===v?"#fff":"#555",
//                 border:`2px solid ${payMethod===v?"var(--dark)":"var(--border)"}`}}>
//               {l}
//             </button>
//           ))}
//         </div>
//       </div>

//       {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
//       <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
//         onClick={handlePlaceOrder} disabled={loading}>
//         {loading?"Processing…":payMethod==="cod"?"✅ Place Order (COD)":"💳 Pay ₹"+total.toLocaleString()}
//       </button>
//     </Modal>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    AUTH MODAL  (login + register)
// ═══════════════════════════════════════════════════════════════ */
// function AuthModal({open,onClose,onAuth}){
//   const [mode,setMode]=useState("login");
//   const [form,setForm]=useState({name:"",email:"",password:"",phone:""});
//   const [loading,setLoading]=useState(false);
//   const [err,setErr]=useState("");
//   const f=v=>setForm(p=>({...p,...v}));

//   const handle=async()=>{
//     setLoading(true);setErr("");
//     try{
//       const data=mode==="login"
//         ?await API.login({email:form.email,password:form.password})
//         :await API.register({name:form.name,email:form.email,password:form.password,phone:form.phone});
//       localStorage.setItem("pm_token",data.token);
//       localStorage.setItem("pm_user",JSON.stringify(data.user));
//       onAuth(data.user);
//       onClose();
//     }catch(e){setErr(e.message);}
//     setLoading(false);
//   };

//   return(
//     <Modal open={open} onClose={onClose} title={mode==="login"?"🔑 Login":"✨ Create Account"}>
//       <div className="tab-bar" style={{marginBottom:20}}>
//         {[["login","Login"],["register","Sign Up"]].map(([m,l])=>(
//           <button key={m} className={`tab-btn${mode===m?" active":""}`} onClick={()=>{setMode(m);setErr("");}}>
//             {l}
//           </button>
//         ))}
//       </div>
//       {mode==="register"&&<Field label="Full Name" value={form.name} onChange={v=>f({name:v})} placeholder="Rahul Sharma" required/>}
//       <Field label="Email" value={form.email} onChange={v=>f({email:v})} type="email" placeholder="you@email.com" required/>
//       {mode==="register"&&<Field label="Phone" value={form.phone} onChange={v=>f({phone:v})} type="tel" placeholder="+91 98765 43210"/>}
//       <Field label="Password" value={form.password} onChange={v=>f({password:v})} type="password" placeholder="••••••••" required/>
//       {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
//       <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
//         onClick={handle} disabled={loading}>
//         {loading?"Please wait…":mode==="login"?"Login →":"Create Account →"}
//       </button>
//       <p style={{textAlign:"center",marginTop:14,fontSize:13,color:"#888",fontWeight:700}}>
//         {mode==="login"?"Don't have an account? ":"Already have an account? "}
//         <span style={{color:"var(--red)",cursor:"pointer"}} onClick={()=>{setMode(mode==="login"?"register":"login");setErr("");}}>
//           {mode==="login"?"Sign Up":"Login"}
//         </span>
//       </p>
//     </Modal>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    MY ORDERS PAGE
// ═══════════════════════════════════════════════════════════════ */
// function MyOrders({onClose}){
//   const [orders,setOrders]=useState([]);
//   const [loading,setLoading]=useState(true);
//   const [cancelling,setCancelling]=useState(null);

//   useEffect(()=>{
//     API.getMyOrders().then(setOrders).catch(()=>{}).finally(()=>setLoading(false));
//   },[]);

//   const cancel=async id=>{
//     setCancelling(id);
//     try{
//       const updated=await API.cancelOrder(id);
//       setOrders(p=>p.map(o=>o._id===id?updated:o));
//     }catch(e){alert(e.message);}
//     setCancelling(null);
//   };

//   return(
//     <Modal open={true} onClose={onClose} title="📦 My Orders" maxWidth={680}>
//       {loading?<div style={{display:"flex",justifyContent:"center",padding:40}}><Spinner/></div>
//       :orders.length===0
//         ?<div style={{textAlign:"center",padding:"40px 0",color:"#bbb"}}>
//            <div style={{fontSize:56}}>📦</div>
//            <p style={{marginTop:12,fontWeight:800,fontSize:16}}>No orders yet!</p>
//          </div>
//         :orders.map(o=>(
//           <div key={o._id} className="order-card">
//             <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:12}}>
//               <div>
//                 <p style={{fontFamily:"'Lilita One',cursive",fontSize:16}}>#{o.orderId}</p>
//                 <p style={{fontSize:12,color:"#aaa",marginTop:2}}>{new Date(o.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</p>
//               </div>
//               <div style={{display:"flex",alignItems:"center",gap:8}}>
//                 <StatusBadge status={o.status}/>
//                 {!["delivered","cancelled"].includes(o.status)&&(
//                   <button className="btn btn-sm" style={{background:"#FEE2E2",color:"#DC2626",borderRadius:8}}
//                     onClick={()=>cancel(o._id)} disabled={cancelling===o._id}>
//                     {cancelling===o._id?"…":"Cancel"}
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
//               {o.items.map((item,i)=>(
//                 <div key={i} style={{display:"flex",alignItems:"center",gap:8,background:"var(--light)",
//                   borderRadius:10,padding:"6px 10px"}}>
//                   <img src={item.img} alt={item.name} style={{width:32,height:32,objectFit:"cover",borderRadius:6}}/>
//                   <span style={{fontSize:12,fontWeight:700}}>{item.name} ×{item.qty}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//               <span style={{fontSize:13,color:"#888",fontWeight:700}}>
//                 {o.paymentMethod==="cod"?"💵 Cash on Delivery":"💳 Online Payment"} · {o.paymentStatus==="paid"?"Paid":"Pending"}
//               </span>
//               <span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{o.total.toLocaleString()}</span>
//             </div>
//           </div>
//         ))
//       }
//     </Modal>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    PRODUCT CARD
// ═══════════════════════════════════════════════════════════════ */
// function PCard({item,onAdd,isService}){
//   const [added,setAdded]=useState(false);
//   const [loaded,setLoaded]=useState(false);
//   const handle=()=>{onAdd(item);setAdded(true);setTimeout(()=>setAdded(false),1600);};
//   const tc=TAG_COLORS[item.tag];
//   // Optimize Unsplash URLs for faster loading
//   const imgSrc=item.img?.includes("unsplash.com")
//     ? item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
//     : item.img;
//   return(
//     <div className="pcard">
//       {item.tag&&<div className="pcard-ribbon" style={{background:tc?.bg||"#FF3B3B",color:tc?.text||"#fff"}}>{item.tag}</div>}
//       <div className="pcard-img">
//         <div style={{position:"absolute",inset:0,background:"#f0f0f0",
//           opacity:loaded?0:1,transition:"opacity .4s ease",zIndex:1}}/>
//         <img src={imgSrc} alt={item.name}
//           loading="lazy" decoding="async"
//           style={{opacity:loaded?1:0,transition:"opacity .4s ease",width:"100%",height:"100%",objectFit:"cover",display:"block"}}
//           onLoad={()=>setLoaded(true)} onError={()=>setLoaded(true)}/>
//       </div>
//       <div className="pcard-body">
//         <p className="pcard-cat">{item.category||"Service"}</p>
//         <Stars n={4+(item._id?.charCodeAt?.(item._id.length-1)%2||0)}/>
//         <h3 className="pcard-name">{item.name}</h3>
//         <p className="pcard-desc">{item.desc}</p>
//         <div className="pcard-foot">
//           <span className="pcard-price">₹{item.price.toLocaleString()}</span>
//           <button className="btn btn-primary btn-sm" onClick={handle}
//             style={{background:added?"var(--green)":"",boxShadow:added?"0 4px 14px rgba(0,200,83,.35)":""}}>
//             {added?"✓ Added":isService?"Book":"+ Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    CUSTOMER PORTAL
// ═══════════════════════════════════════════════════════════════ */
// function CustomerPortal({user,onAuthOpen,onLogout,onOwnerClick}){
//   const [tab,setTab]=useState("products");
//   const [cat,setCat]=useState("All");
//   const [search,setSearch]=useState("");
//   const [products,setProducts]=useState([]);
//   const [services,setServices]=useState([]);
//   const [loadingData,setLoadingData]=useState(true);
//   const [cart,setCart]=useState([]);
//   const [cartOpen,setCartOpen]=useState(false);
//   const [checkout,setCheckout]=useState(false);
//   const [orders,setOrders]=useState(false);
//   const [confetti,setConfetti]=useState(false);
//   const [toast,setToast]=useState("");
//   const [mobileNav,setMobileNav]=useState(false);

//   const homeRef=useRef(),productsRef=useRef(),servicesRef=useRef(),contactRef=useRef();

//   // Load products & services from backend
//   useEffect(()=>{
//     setLoadingData(true);
//     Promise.all([API.getProducts(),API.getServices()])
//       .then(([p,s])=>{
//         setProducts(p);
//         setServices(s);
//         // Preload first 4 product images for instant display
//         p.slice(0,4).forEach(item=>{
//           if(item.img){
//             const link=document.createElement("link");
//             link.rel="preload";
//             link.as="image";
//             link.href=item.img?.includes("unsplash.com")
//               ? item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
//               : item.img;
//             document.head.appendChild(link);
//           }
//         });
//       })
//       .catch(()=>{})
//       .finally(()=>setLoadingData(false));
//   },[]);

//   const filtered=(tab==="products"?products:services).filter(p=>{
//     const mc=tab==="services"||cat==="All"||p.category===cat;
//     const ms=p.name.toLowerCase().includes(search.toLowerCase());
//     return mc&&ms;
//   });

//   useReveal(`${tab}|${cat}|${search}|${filtered.length}`);

//   const scrollTo=useCallback(r=>{
//     setMobileNav(false);
//     setTimeout(()=>r?.current?.scrollIntoView({behavior:"smooth",block:"start"}),80);
//   },[]);

//   const addToCart=item=>{
//     setCart(prev=>{
//       const id=item._id||item.id;
//       const ex=prev.find(i=>(i._id||i.id)===id);
//       return ex?prev.map(i=>(i._id||i.id)===id?{...i,qty:i.qty+1}:i):[...prev,{...item,id,qty:1}];
//     });
//     setToast(`🎉 ${item.name} added!`);
//     setTimeout(()=>setToast(""),2200);
//   };

//   const cartCount=cart.reduce((s,i)=>s+i.qty,0);

//   const handleOrderSuccess=order=>{
//     setConfetti(true);setTimeout(()=>setConfetti(false),3500);
//     setCart([]);setCheckout(false);
//     setToast(`🎊 Order #${order.orderId} placed! We'll contact you shortly.`);
//     setTimeout(()=>setToast(""),5000);
//   };

//   return(
//     <div style={{background:"#fff"}}>
//       <Confetti active={confetti}/>

//       {/* NAVBAR */}
//       <nav className="nav">
//         <a className="nav-logo" onClick={e=>{e.preventDefault();scrollTo(homeRef);}} href="#">
//           <div style={{width:38,height:38,background:"#FF3B3B",borderRadius:10,
//             display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🎈</div>
//           <span className="nav-logo-text">Party<span>Mashup</span></span>
//         </a>
//         <ul className={`nav-menu${mobileNav?" open":""}`}>
//           {[["Home",homeRef],["Products",productsRef],["Services",servicesRef],["Contact",contactRef]].map(([l,r])=>(
//             <li key={l}><a onClick={e=>{e.preventDefault();scrollTo(r);}} href="#">{l}</a></li>
//           ))}
//           {user?.role==="owner"&&(
//             <li><a onClick={e=>{e.preventDefault();onOwnerClick();}} href="#"
//               style={{background:"var(--dark)",color:"#FFD200",padding:"8px 18px",borderRadius:50}}>
//               ⚙️ Dashboard
//             </a></li>
//           )}
//         </ul>
//         <div style={{display:"flex",alignItems:"center",gap:10}}>
//           {user
//             ?<div style={{display:"flex",alignItems:"center",gap:8}}>
//                {user.role!=="owner"&&(
//                  <button className="btn btn-sm btn-outline" onClick={()=>setOrders(true)}>📦 Orders</button>
//                )}
//                <div style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",
//                  background:"var(--light)",borderRadius:50,padding:"6px 14px"}}
//                  onClick={onLogout}>
//                  <div style={{width:28,height:28,borderRadius:"50%",background:"var(--red)",
//                    display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900}}>
//                    {user.name[0].toUpperCase()}
//                  </div>
//                  <span style={{fontSize:13,fontWeight:800,color:"#555"}}>{user.name.split(" ")[0]}</span>
//                </div>
//              </div>
//             :<button className="btn btn-sm btn-outline" onClick={onAuthOpen}>Login / Sign Up</button>
//           }
//           <button className="btn btn-icon" onClick={()=>setCartOpen(true)} style={{position:"relative",fontSize:20}}>
//             🛍️
//             {cartCount>0&&<span style={{position:"absolute",top:-4,right:-4,background:"var(--red)",
//               color:"#fff",borderRadius:"50%",width:18,height:18,fontSize:10,fontWeight:900,
//               display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
//           </button>
//           <button className="hamburger" onClick={()=>setMobileNav(v=>!v)}>{mobileNav?"✕":"☰"}</button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section ref={homeRef} className="hero">
//         <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(255,210,0,.15)",top:-60,right:"38%",pointerEvents:"none"}}/>
//         <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:"rgba(255,59,59,.1)",bottom:40,left:"30%",pointerEvents:"none"}}/>
//         <div className="hero-content">
//           <div className="hero-badge">🎉 Indirapuram's #1 Party Store</div>
//           <h1 className="hero-title">Make Every <span>Celebration</span> Unforgettable!</h1>
//           <p className="hero-sub">Toys · Foil Balloons · Birthday & Anniversary Decoration<br/>Serving <strong>Indirapuram, Ghaziabad</strong> & nearby areas</p>
//           <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
//             <button className="btn btn-primary" onClick={()=>scrollTo(productsRef)}>🛍️ Shop Now</button>
//             <button className="btn btn-outline" onClick={()=>{scrollTo(servicesRef);setTimeout(()=>addToCart&&null,600);}}>🎂 Book Decoration</button>
//           </div>
//           <div style={{display:"flex",gap:10,marginTop:32,flexWrap:"wrap"}}>
//             {["⭐ 500+ Happy Parties","🚚 Same-Day Setup","💳 Pay Online or COD"].map(t=>(
//               <span key={t} style={{background:"#fff",borderRadius:50,padding:"8px 16px",fontSize:12,fontWeight:800,boxShadow:"0 3px 14px rgba(0,0,0,.08)"}}>{t}</span>
//             ))}
//           </div>
//         </div>
//         <img className="hero-img float" style={{"--fd":"4s"}}
//           src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=70&auto=format" alt="Party" fetchpriority="high" decoding="async"/>
//       </section>

//       {/* MARQUEE */}
//       <div className="marquee-wrap">
//         <div className="marquee-inner">
//           {[...Array(2)].map((_,ri)=>(
//             ["🎈 Foil Balloons","🧸 Kids Toys","🎂 Birthday Decoration","💍 Anniversary Décor","👶 Baby Shower","🎊 Confetti","🎁 Gift Sets","🎪 Event Decoration"].map((t,i)=>(
//               <span key={`${ri}-${i}`} className="marquee-item"><span className="marquee-dot"/>{t}</span>
//             ))
//           ))}
//         </div>
//       </div>

//       {/* PRODUCTS */}
//       <section ref={productsRef} className="section">
//         <div style={{maxWidth:1160,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Our Collection</div>
//             <h2 className="section-title">Shop by Category</h2>
//             <p className="section-sub">Quality toys, balloons & decoration supplies</p>
//           </div>
//           <div className="reveal" style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
//             <div className="tab-bar">
//               {[["products","🛍️ Products"],["services","🎪 Decoration"]].map(([t,l])=>(
//                 <button key={t} onClick={()=>setTab(t)} className={`tab-btn${tab===t?" active":""}`}>{l}</button>
//               ))}
//             </div>
//             <div className="search-wrap">
//               <span className="search-icon">🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products…"/>
//             </div>
//           </div>
//           {tab==="products"&&(
//             <div className="cat-tabs reveal">
//               {CATS.map(c=><button key={c} onClick={()=>setCat(c)} className={`cat-tab${cat===c?" active":""}`}>{c}</button>)}
//             </div>
//           )}
//           {loadingData
//             ?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
//                {[1,2,3,4].map(i=><div key={i} style={{borderRadius:20,overflow:"hidden",border:"2px solid #eee"}}>
//                  <div className="skel" style={{height:220}}/><div style={{padding:18}}>
//                  <div className="skel" style={{height:14,width:"60%",marginBottom:8}}/>
//                  <div className="skel" style={{height:20,marginBottom:8}}/>
//                  <div className="skel" style={{height:12,width:"80%"}}/></div></div>)}
//              </div>
//             :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
//                {filtered.map((item,i)=>(
//                  <div key={item._id||item.id} style={{animation:`fadeUp .4s ease ${i*.055}s both`}}>
//                    <PCard item={item} onAdd={addToCart} isService={tab==="services"}/>
//                  </div>
//                ))}
//                {filtered.length===0&&!loadingData&&(
//                  <div style={{gridColumn:"1/-1",textAlign:"center",padding:"60px 0",color:"#bbb"}}>
//                    <div style={{fontSize:56}}>🔍</div>
//                    <p style={{marginTop:12,fontWeight:800,fontSize:18,color:"#999"}}>No results found</p>
//                  </div>
//                )}
//              </div>
//           }
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section ref={servicesRef} style={{background:"var(--light)",padding:"80px 48px"}}>
//         <div style={{maxWidth:1160,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Decoration Services</div>
//             <h2 className="section-title">We Handle Everything 🎉</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:26}}>
//             {services.map((svc,i)=>(
//               <div key={svc._id} className="scard reveal" style={{position:"relative"}}>
//                 {svc.tag&&<div className="pcard-ribbon" style={{background:TAG_COLORS[svc.tag]?.bg||"#FF3B3B",color:"#fff",top:16}}>{svc.tag}</div>}
//                 <div className="scard-img">
//                     <img src={svc.img?.includes("unsplash.com")?svc.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70"):svc.img}
//                       alt={svc.name} loading="lazy" decoding="async"
//                       style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
//                   </div>
//                 <div className="scard-body">
//                   <Chip text={svc.tag}/>
//                   <h3 className="scard-name">{svc.name}</h3>
//                   <p className="scard-desc">{svc.desc}</p>
//                   <div className="scard-foot">
//                     <span className="scard-price">₹{svc.price.toLocaleString()}</span>
//                     <button className="btn btn-yellow btn-sm" onClick={()=>{
//                       if(!user){setCartOpen(false);/* open auth */return;}
//                       addToCart(svc);setCartOpen(true);
//                     }}>Book Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY US */}
//       <section className="section">
//         <div style={{maxWidth:1000,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Why Choose Us</div>
//             <h2 className="section-title">Indirapuram's Most Trusted 💛</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:24}}>
//             {[
//               {icon:"🎨",title:"Custom Themes",desc:"Personalised décor for every occasion.",c:"#FFF0E6",ic:"#FF7A00"},
//               {icon:"⚡",title:"2-Hour Setup",desc:"Full decoration done in under 2 hours.",c:"#E6F4FF",ic:"#1E90FF"},
//               {icon:"💰",title:"Best Prices",desc:"Premium quality at unbeatable prices.",c:"#FFFBE6",ic:"#FFD200"},
//               {icon:"📸",title:"Photo Backdrops",desc:"Instagram-worthy setups every time.",c:"#F0E6FF",ic:"#9B30FF"},
//             ].map(f=>(
//               <div key={f.title} className="why-card reveal">
//                 <div className="why-icon" style={{background:f.c}}>{f.icon}</div>
//                 <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:19,color:"var(--dark)",marginBottom:8}}>{f.title}</h3>
//                 <p style={{fontSize:13.5,color:"#888",lineHeight:1.7}}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section style={{background:"var(--light)",padding:"80px 48px"}}>
//         <div style={{maxWidth:960,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Reviews</div>
//             <h2 className="section-title">Families Love PartyMashup 💬</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:22}}>
//             {[
//               {name:"Priya Sharma",area:"Vaishali",text:"Stunning birthday decoration! My daughter was over the moon.",n:5,color:"#FF3B3B"},
//               {name:"Rohit Gupta",area:"Indirapuram",text:"Great quality foil balloons, super fast delivery. Will order again!",n:5,color:"#1E90FF"},
//               {name:"Neha Singh",area:"Kaushambi",text:"Anniversary decoration in under 2 hours. Truly magical experience!",n:5,color:"#9B30FF"},
//             ].map(t=>(
//               <div key={t.name} className="testi-card reveal">
//                 <Stars n={t.n}/>
//                 <p style={{fontSize:14,color:"#555",lineHeight:1.75,margin:"14px 0 18px",fontWeight:600}}>"{t.text}"</p>
//                 <div style={{display:"flex",alignItems:"center",gap:12}}>
//                   <div style={{width:44,height:44,borderRadius:"50%",background:t.color,
//                     display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#fff",fontSize:18}}>
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <p style={{fontWeight:900,fontSize:14}}>{t.name}</p>
//                     <p style={{fontSize:12,color:"#aaa"}}>📍 {t.area}, Ghaziabad</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="cta-banner reveal">
//         <div>
//           <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:"clamp(26px,4vw,42px)",color:"#fff",marginBottom:8}}>Ready to Make Your Party Amazing?</h2>
//           <p style={{fontSize:15,color:"rgba(255,255,255,.65)",fontWeight:600}}>Order online or WhatsApp us — we'll plan everything 🎊</p>
//         </div>
//         <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
//           <button className="btn btn-yellow" style={{fontSize:15,padding:"14px 32px"}}
//             onClick={()=>window.open("https://wa.me/919876543210","_blank")}>📲 WhatsApp Us</button>
//           {!user&&<button className="btn btn-outline" style={{color:"#fff",borderColor:"rgba(255,255,255,.4)",fontSize:15,padding:"14px 32px"}}
//             onClick={onAuthOpen}>🔑 Login / Sign Up</button>}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer ref={contactRef} className="footer">
//         <div className="footer-grid">
//           <div>
//             <div style={{fontFamily:"'Lilita One',cursive",fontSize:24,color:"#fff",marginBottom:12}}>
//               Party<span style={{color:"var(--yellow)"}}>Mashup</span>
//             </div>
//             <p style={{fontSize:14,color:"rgba(255,255,255,.45)",lineHeight:1.8}}>
//               Indirapuram's favourite toy & party decoration store. Making every celebration magical since 2018.
//             </p>
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">Find Us</p>
//             {["Shop 5, Ahinsa Khand-1","Indirapuram, GZB – 201014","📞 +91 98765 43210","⏰ 10 AM – 9 PM Daily"].map(l=><p key={l}>{l}</p>)}
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">Areas We Serve</p>
//             {["Indirapuram","Vaishali","Kaushambi","Rajnagar Ext.","Vasundhara","Crossings Republik"].map(a=><p key={a}>📌 {a}</p>)}
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">We Offer</p>
//             {["Kids Toys","Foil Balloons","Birthday Decoration","Anniversary Decoration","Baby Shower Décor","Corporate Events"].map(c=><a key={c} href="#">{c}</a>)}
//           </div>
//         </div>
//         <div style={{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:18,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
//           <p style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>© 2025 PartyMashup, Indirapuram Ghaziabad</p>
//           <button onClick={onOwnerClick} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
//             color:"rgba(255,255,255,.5)",borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:700,cursor:"pointer"}}>
//             👤 Owner Login
//           </button>
//         </div>
//       </footer>

//       {/* CART FAB */}
//       <button onClick={()=>setCartOpen(true)} style={{position:"fixed",bottom:28,right:28,
//         background:"var(--red)",color:"#fff",border:"none",borderRadius:"50%",width:58,height:58,
//         fontSize:24,cursor:"pointer",zIndex:800,boxShadow:"0 6px 28px rgba(255,59,59,.5)",
//         display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .2s"}}
//         onMouseEnter={e=>e.currentTarget.style.transform="scale(1.12)"}
//         onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
//         🛍️
//         {cartCount>0&&<span style={{position:"absolute",top:-3,right:-3,background:"#1A1A1A",
//           color:"#fff",borderRadius:"50%",width:20,height:20,fontSize:10,fontWeight:900,
//           display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
//       </button>

//       <CartDrawer cart={cart} open={cartOpen} onClose={()=>setCartOpen(false)}
//         onRemove={id=>setCart(p=>p.filter(i=>(i.id||i._id)!==id))}
//         onCheckout={()=>{
//           if(!user){setCartOpen(false);onAuthOpen();return;}
//           setCartOpen(false);setCheckout(true);
//         }}/>

//       {checkout&&<CheckoutModal open={checkout} onClose={()=>setCheckout(false)}
//         cart={cart} user={user} onSuccess={handleOrderSuccess}/>}

//       {orders&&<MyOrders onClose={()=>setOrders(false)}/>}

//       {toast&&(
//         <div className="toast-pop" style={{position:"fixed",bottom:100,left:"50%",transform:"translateX(-50%)",
//           background:"#1A1A1A",color:"#fff",padding:"12px 24px",borderRadius:50,fontSize:13,
//           fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap",maxWidth:"90vw",textAlign:"center"}}>
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    OWNER DASHBOARD
// ═══════════════════════════════════════════════════════════════ */
// function OwnerDashboard({user,onLogout}){
//   const [tab,setTab]=useState("overview");
//   const [products,setProducts]=useState([]);
//   const [services,setServices]=useState([]);
//   const [orders,setOrders]=useState([]);
//   const [stats,setStats]=useState(null);
//   const [loading,setLoading]=useState(true);
//   const [showForm,setShowForm]=useState(false);
//   const [editItem,setEditItem]=useState(null);
//   const [delItem,setDelItem]=useState(null);
//   const [itemTab,setItemTab]=useState("products");
//   const [toast,setToast]=useState("");
//   const [fd,setFd]=useState({name:"",category:"Toys",price:"",img:"",desc:"",tag:""});
//   const showT=msg=>{setToast(msg);setTimeout(()=>setToast(""),2600);};

//   useEffect(()=>{
//     Promise.all([API.getAdminStats(),API.getProducts(),API.getServices(),API.getAdminOrders()])
//       .then(([s,p,sv,o])=>{setStats(s);setProducts(p);setServices(sv);setOrders(o.orders||[]);})
//       .catch(()=>{})
//       .finally(()=>setLoading(false));
//   },[]);

//   const data=itemTab==="products"?products:services;
//   const setData=itemTab==="products"?setProducts:setServices;

//   const openAdd=()=>{setEditItem(null);setFd({name:"",category:"Toys",price:"",img:"",desc:"",tag:""});setShowForm(true);};
//   const openEdit=item=>{setEditItem(item);setFd({name:item.name,category:item.category||"",price:item.price,img:item.img,desc:item.desc,tag:item.tag||""});setShowForm(true);};

//   const save=async()=>{
//     if(!fd.name||!fd.price)return;
//     const payload={name:fd.name,category:fd.category,price:Number(fd.price),img:fd.img,desc:fd.desc,tag:fd.tag};
//     try{
//       if(editItem){
//         const updated=itemTab==="products"
//           ?await API.updateProduct(editItem._id,payload)
//           :await API.updateService(editItem._id,payload);
//         setData(p=>p.map(x=>x._id===editItem._id?updated:x));
//         showT("✅ Updated!");
//       }else{
//         const created=itemTab==="products"
//           ?await API.createProduct(payload)
//           :await API.createService(payload);
//         setData(p=>[created,...p]);
//         showT("✅ Added!");
//       }
//       setShowForm(false);
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const del=async item=>{
//     try{
//       itemTab==="products"?await API.deleteProduct(item._id):await API.deleteService(item._id);
//       setData(p=>p.filter(x=>x._id!==item._id));
//       setDelItem(null);showT("🗑️ Deleted.");
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const updateStatus=async(id,status)=>{
//     try{
//       const updated=await API.updateOrderStatus(id,status);
//       setOrders(p=>p.map(o=>o._id===id?updated:o));
//       showT("✅ Status updated!");
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const statCards=[
//     {label:"Total Orders",value:stats?.totalOrders??0,color:"#FF3B3B",icon:"📦"},
//     {label:"Revenue",value:`₹${(stats?.revenue??0).toLocaleString()}`,color:"#00C853",icon:"💰"},
//     {label:"Products",value:stats?.totalProducts??products.length,color:"#1E90FF",icon:"🧸"},
//     {label:"Customers",value:stats?.totalCustomers??0,color:"#9B30FF",icon:"👥"},
//   ];

//   return(
//     <div className="dash">
//       <div className="dash-top">
//         <div style={{display:"flex",alignItems:"center",gap:10}}>
//           <div style={{width:34,height:34,background:"#FF3B3B",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎈</div>
//           <div>
//             <p style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>PartyMashup</p>
//             <p style={{fontSize:10,color:"#aaa"}}>Owner Dashboard · {user?.email}</p>
//           </div>
//         </div>
//         <div style={{display:"flex",gap:8,alignItems:"center"}}>
//           <div className="tab-bar" style={{display:"flex"}}>
//             {[["overview","📊 Overview"],["items","🛍️ Products"],["orders","📦 Orders"]].map(([t,l])=>(
//               <button key={t} className={`tab-btn${tab===t?" active":""}`} onClick={()=>setTab(t)}>{l}</button>
//             ))}
//           </div>
//           <button className="btn btn-outline btn-sm" onClick={onLogout}>🚪 Logout</button>
//         </div>
//       </div>

//       <div className="dash-body">
//         {loading&&<div style={{display:"flex",justifyContent:"center",padding:60}}><Spinner/></div>}

//         {/* OVERVIEW */}
//         {!loading&&tab==="overview"&&(
//           <>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:16,marginBottom:32}}>
//               {statCards.map(s=>(
//                 <div key={s.label} className="stat-card" style={{borderTop:`3px solid ${s.color}`}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//                     <span style={{fontSize:32}}>{s.icon}</span>
//                     <span className="stat-val" style={{color:s.color}}>{s.value}</span>
//                   </div>
//                   <p className="stat-label">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//             <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:20,marginBottom:16}}>Recent Orders</h3>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Order ID","Customer","Total","Status","Date"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {(stats?.recentOrders||orders).slice(0,5).map(o=>(
//                     <tr key={o._id}>
//                       <td style={{fontWeight:800}}>#{o.orderId}</td>
//                       <td>{o.customerName||o.customer?.name}</td>
//                       <td style={{fontFamily:"'Lilita One',cursive",color:"var(--red)"}}>₹{o.total?.toLocaleString()}</td>
//                       <td><StatusBadge status={o.status}/></td>
//                       <td style={{color:"#aaa",fontSize:12}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}

//         {/* PRODUCTS / SERVICES */}
//         {!loading&&tab==="items"&&(
//           <>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
//               <div className="tab-bar">
//                 {[["products","🛍️ Products"],["services","🎪 Services"]].map(([t,l])=>(
//                   <button key={t} className={`tab-btn${itemTab===t?" active":""}`} onClick={()=>setItemTab(t)}>{l}</button>
//                 ))}
//               </div>
//               <button className="btn btn-primary" onClick={openAdd}>＋ Add {itemTab==="products"?"Product":"Service"}</button>
//             </div>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Item","Category","Price","Tag","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {data.map(item=>(
//                     <tr key={item._id}>
//                       <td>
//                         <div style={{display:"flex",alignItems:"center",gap:12}}>
//                           <img src={item.img||"https://placehold.co/52"} alt={item.name}
//                             style={{width:52,height:52,objectFit:"cover",borderRadius:10,border:"2px solid #eee"}}/>
//                           <div>
//                             <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
//                             <p style={{fontSize:12,color:"#aaa",maxWidth:220}}>{item.desc?.slice(0,55)}…</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td style={{fontSize:13,color:"#888",fontWeight:700}}>{item.category||"—"}</td>
//                       <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{item.price?.toLocaleString()}</span></td>
//                       <td><Chip text={item.tag}/></td>
//                       <td>
//                         <div style={{display:"flex",gap:8}}>
//                           <button onClick={()=>openEdit(item)} style={{background:"#EEF2FF",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#4F46E5"}}>✏️ Edit</button>
//                           <button onClick={()=>setDelItem(item)} style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#DC2626"}}>🗑️ Del</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {data.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No items yet.</p></div>}
//             </div>
//           </>
//         )}

//         {/* ORDERS */}
//         {!loading&&tab==="orders"&&(
//           <>
//             <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,marginBottom:20}}>All Orders</h3>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Order","Customer","Items","Total","Payment","Status","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {orders.map(o=>(
//                     <tr key={o._id}>
//                       <td>
//                         <p style={{fontWeight:800}}>#{o.orderId}</p>
//                         <p style={{fontSize:11,color:"#aaa"}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</p>
//                       </td>
//                       <td>
//                         <p style={{fontWeight:700,fontSize:13}}>{o.customerName||o.customer?.name}</p>
//                         <p style={{fontSize:11,color:"#aaa"}}>{o.customerPhone||o.customer?.phone}</p>
//                       </td>
//                       <td style={{fontSize:12,color:"#888"}}>{o.items?.length} item{o.items?.length!==1?"s":""}</td>
//                       <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:16,color:"var(--red)"}}>₹{o.total?.toLocaleString()}</span></td>
//                       <td>
//                         <span style={{fontSize:11,fontWeight:700,color:o.paymentStatus==="paid"?"var(--green)":"#FF7A00"}}>
//                           {o.paymentMethod==="cod"?"COD":"Online"} · {o.paymentStatus}
//                         </span>
//                       </td>
//                       <td><StatusBadge status={o.status}/></td>
//                       <td>
//                         <select value={o.status} onChange={e=>updateStatus(o._id,e.target.value)}
//                           style={{padding:"6px 10px",borderRadius:8,border:"2px solid #eee",fontSize:12,
//                             fontFamily:"'Nunito',sans-serif",cursor:"pointer",fontWeight:700}}>
//                           {["placed","confirmed","preparing","out_for_delivery","delivered","cancelled"].map(s=>(
//                             <option key={s} value={s}>{STATUS_LABELS[s]}</option>
//                           ))}
//                         </select>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {orders.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No orders yet.</p></div>}
//             </div>
//           </>
//         )}
//       </div>

//       {/* ADD/EDIT MODAL */}
//       <Modal open={showForm} onClose={()=>setShowForm(false)} title={editItem?"✏️ Edit Item":"➕ Add Item"}>
//         <Field label="Name *"       value={fd.name}     onChange={v=>setFd(f=>({...f,name:v}))}     placeholder="e.g. Unicorn Balloon" required/>
//         {itemTab==="products"&&<Field label="Category" value={fd.category} onChange={v=>setFd(f=>({...f,category:v}))} as="select" options={["Toys","Balloons","Decoration"]}/>}
//         <Field label="Price (₹) *" value={fd.price}    onChange={v=>setFd(f=>({...f,price:v}))}    type="number" placeholder="299" required/>
//         <ImageUploader value={fd.img||""} onChange={v=>setFd(f=>({...f,img:v}))}/>
//         <Field label="Description"  value={fd.desc}     onChange={v=>setFd(f=>({...f,desc:v}))}     as="textarea" placeholder="Short description…"/>
//         <Field label="Badge Tag"    value={fd.tag}      onChange={v=>setFd(f=>({...f,tag:v}))}      placeholder="Bestseller / New / Popular / Trending"/>
//         <div style={{display:"flex",gap:10,marginTop:8}}>
//           <button className="btn btn-outline" style={{flex:1}} onClick={()=>setShowForm(false)}>Cancel</button>
//           <button className="btn btn-primary" style={{flex:2,borderRadius:12}} onClick={save}>
//             {editItem?"💾 Save Changes":"➕ Add Item"}
//           </button>
//         </div>
//       </Modal>

//       {/* DELETE CONFIRM */}
//       <Modal open={!!delItem} onClose={()=>setDelItem(null)} title="🗑️ Confirm Delete">
//         <div style={{textAlign:"center",padding:"8px 0 20px"}}>
//           {delItem?.img&&<img src={delItem.img} alt="" style={{width:80,height:80,objectFit:"cover",borderRadius:14,margin:"0 auto 14px",display:"block",border:"2px solid #eee"}}/>}
//           <p style={{fontWeight:800,fontSize:16}}>{delItem?.name}</p>
//           <p style={{color:"#aaa",marginTop:6,fontSize:14}}>This action cannot be undone.</p>
//         </div>
//         <div style={{display:"flex",gap:10}}>
//           <button className="btn btn-outline" style={{flex:1}} onClick={()=>setDelItem(null)}>Cancel</button>
//           <button className="btn" style={{flex:1,background:"#DC2626",color:"#fff",borderRadius:50,padding:"11px 0",fontWeight:900,cursor:"pointer",border:"none"}} onClick={()=>del(delItem)}>Yes, Delete</button>
//         </div>
//       </Modal>

//       {toast&&<div className="toast-pop" style={{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",
//         background:"#1A1A1A",color:"#fff",padding:"12px 28px",borderRadius:50,fontSize:13,
//         fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap"}}>
//         {toast}
//       </div>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    ROOT
// ═══════════════════════════════════════════════════════════════ */
// export default function App(){
//   const [view,setView]=useState("store");
//   const [user,setUser]=useState(()=>{
//     try{const u=localStorage.getItem("pm_user");return u?JSON.parse(u):null;}catch{return null;}
//   });
//   const [authOpen,setAuthOpen]=useState(false);

//   // Verify token on load
//   useEffect(()=>{
//     if(localStorage.getItem("pm_token")){
//       API.getMe().then(d=>{
//         setUser(d.user);
//         localStorage.setItem("pm_user",JSON.stringify(d.user));
//       }).catch(()=>{
//         localStorage.removeItem("pm_token");
//         localStorage.removeItem("pm_user");
//         setUser(null);
//       });
//     }
//   },[]);

//   useEffect(()=>{
//     document.title="PartyMashup – Kids Toys, Foil Balloons & Party Decoration in Indirapuram Ghaziabad";
//     [["description","Best kids toys, foil balloons & birthday decoration in Indirapuram Ghaziabad."],
//      ["keywords","party decoration Indirapuram, kids toys Indirapuram Ghaziabad, foil balloons, birthday decoration, PartyMashup"],
//      ["robots","index, follow"],["geo.region","IN-UP"],["geo.placename","Indirapuram, Ghaziabad"]].forEach(([n,c])=>{
//       let el=document.querySelector(`meta[name='${n}']`);
//       if(!el){el=document.createElement("meta");el.name=n;document.head.appendChild(el);}
//       el.content=c;
//     });
//   },[]);

//   const handleAuth=u=>{
//     setUser(u);
//     localStorage.setItem("pm_user",JSON.stringify(u));
//     if(u.role==="owner")setView("owner");
//   };

//   const handleLogout=()=>{
//     localStorage.removeItem("pm_token");
//     localStorage.removeItem("pm_user");
//     setUser(null);
//     setView("store");
//   };

//   return(
//     <>
//       <style>{CSS}</style>
//       {view==="store"&&(
//         <CustomerPortal user={user} onAuthOpen={()=>setAuthOpen(true)}
//           onLogout={handleLogout} onOwnerClick={()=>{
//             if(user?.role==="owner")setView("owner");
//             else setAuthOpen(true);
//           }}/>
//       )}
//       {view==="owner"&&user?.role==="owner"&&(
//         <OwnerDashboard user={user} onLogout={handleLogout}/>
//       )}
//       <AuthModal open={authOpen} onClose={()=>setAuthOpen(false)} onAuth={handleAuth}/>
//     </>
//   );
// }







































// import { useState, useEffect, useRef, useCallback } from "react";
// import * as API from "./api";

// /* ═══════════════════════════════════════════════════════════════
//    GLOBAL CSS
// ═══════════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lilita+One&display=swap');
// *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
// html{scroll-behavior:smooth;}
// body{font-family:'Nunito',sans-serif;background:#fff;color:#1A1A1A;overflow-x:hidden;}
// h1,h2,h3,h4{font-family:'Lilita One',cursive;}
// :root{
//   --red:#FF3B3B;--yellow:#FFD200;--blue:#1E90FF;--green:#00C853;
//   --purple:#9B30FF;--orange:#FF7A00;--dark:#1A1A1A;--light:#F7F7F7;--border:#EBEBEB;
// }
// .nav{position:sticky;top:0;z-index:999;background:#fff;border-bottom:2px solid var(--border);
//   display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:72px;}
// .nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none;}
// .nav-logo-text{font-family:'Lilita One',cursive;font-size:24px;color:var(--dark);}
// .nav-logo-text span{color:var(--red);}
// .nav-menu{display:flex;align-items:center;gap:32px;list-style:none;}
// .nav-menu a{font-weight:800;font-size:14px;color:#555;text-decoration:none;
//   position:relative;padding-bottom:3px;transition:color .2s;}
// .nav-menu a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2.5px;
//   background:var(--red);border-radius:2px;transition:width .25s;}
// .nav-menu a:hover{color:var(--dark);}
// .nav-menu a:hover::after{width:100%;}
// .btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:none;
//   border-radius:50px;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:900;
//   transition:transform .15s,box-shadow .15s;}
// .btn:hover{transform:translateY(-2px);}
// .btn:active{transform:translateY(0);}
// .btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}
// .btn-primary{background:var(--red);color:#fff;padding:13px 32px;font-size:15px;
//   box-shadow:0 4px 16px rgba(255,59,59,.35);}
// .btn-primary:hover{box-shadow:0 8px 28px rgba(255,59,59,.45);}
// .btn-outline{background:transparent;color:var(--dark);padding:11px 28px;font-size:14px;border:2px solid var(--dark);}
// .btn-outline:hover{background:var(--dark);color:#fff;}
// .btn-yellow{background:var(--yellow);color:var(--dark);padding:11px 26px;font-size:13px;
//   box-shadow:0 4px 14px rgba(255,210,0,.4);}
// .btn-sm{padding:8px 18px;font-size:12px;}
// .btn-icon{background:var(--light);color:var(--dark);width:42px;height:42px;border-radius:50%;font-size:18px;padding:0;}
// .btn-icon:hover{background:var(--border);}
// .btn-green{background:var(--green);color:#fff;padding:13px 32px;font-size:15px;box-shadow:0 4px 16px rgba(0,200,83,.35);}

// .hero{background:linear-gradient(135deg,#FFF9E6 0%,#FFF0F3 50%,#EEF6FF 100%);
//   min-height:88vh;display:flex;align-items:center;padding:80px 48px 60px;
//   position:relative;overflow:hidden;}
// .hero-content{max-width:560px;position:relative;z-index:2;}
// .hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--yellow);color:var(--dark);
//   border-radius:50px;padding:6px 16px;font-size:12px;font-weight:900;letter-spacing:.5px;
//   text-transform:uppercase;margin-bottom:20px;}
// .hero-title{font-size:clamp(42px,7vw,80px);line-height:1.05;color:var(--dark);margin-bottom:18px;}
// .hero-title span{color:var(--red);}
// .hero-sub{font-size:17px;color:#666;line-height:1.7;margin-bottom:32px;font-weight:600;}
// .hero-img{position:absolute;right:-20px;bottom:0;height:95%;max-width:52%;object-fit:contain;
//   filter:drop-shadow(0 20px 60px rgba(0,0,0,.12));z-index:1;}

// .marquee-wrap{background:var(--dark);padding:14px 0;overflow:hidden;white-space:nowrap;}
// @keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
// .marquee-inner{display:inline-flex;animation:marquee 22s linear infinite;}
// .marquee-item{display:inline-flex;align-items:center;gap:12px;padding:0 32px;
//   font-size:13px;font-weight:800;color:#fff;letter-spacing:.5px;text-transform:uppercase;}
// .marquee-dot{width:6px;height:6px;border-radius:50%;background:var(--yellow);flex-shrink:0;}

// .section{padding:80px 48px;}
// .section-header{text-align:center;margin-bottom:52px;}
// .section-label{display:inline-block;background:var(--yellow);color:var(--dark);border-radius:50px;
//   padding:5px 18px;font-size:11px;font-weight:900;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;}
// .section-title{font-size:clamp(28px,4vw,44px);color:var(--dark);margin-bottom:10px;}
// .section-sub{font-size:15px;color:#888;font-weight:600;}

// .cat-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px;}
// .cat-tab{padding:9px 22px;border-radius:50px;font-size:13px;font-weight:800;cursor:pointer;
//   border:2px solid var(--border);background:#fff;color:#888;transition:all .2s;font-family:'Nunito',sans-serif;}
// .cat-tab:hover{border-color:var(--dark);color:var(--dark);}
// .cat-tab.active{background:var(--dark);border-color:var(--dark);color:#fff;}

// .pcard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s,border-color .25s;display:flex;flex-direction:column;position:relative;}
// .pcard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);border-color:#ccc;}
// .pcard-img{height:220px;overflow:hidden;background:var(--light);position:relative;}
// .pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;display:block;}
// .pcard:hover .pcard-img img{transform:scale(1.07);}
// .pcard-body{padding:18px 18px 20px;flex:1;display:flex;flex-direction:column;gap:6px;}
// .pcard-cat{font-size:11px;font-weight:900;letter-spacing:.8px;text-transform:uppercase;color:#aaa;}
// .pcard-name{font-family:'Lilita One',cursive;font-size:17px;color:var(--dark);line-height:1.3;}
// .pcard-desc{font-size:12.5px;color:#888;line-height:1.6;flex:1;}
// .pcard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:10px;}
// .pcard-price{font-family:'Lilita One',cursive;font-size:22px;color:var(--red);}
// .pcard-ribbon{position:absolute;top:14px;left:0;color:#fff;font-size:10px;font-weight:900;
//   padding:4px 12px;border-radius:0 6px 6px 0;text-transform:uppercase;letter-spacing:.8px;z-index:2;}

// .scard{background:#fff;border-radius:20px;overflow:hidden;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;}
// .scard:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1);}
// .scard-img{height:240px;overflow:hidden;background:var(--light);position:relative;}
// .scard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
// .scard:hover .scard-img img{transform:scale(1.06);}
// .scard-body{padding:20px 22px 24px;flex:1;display:flex;flex-direction:column;gap:8px;}
// .scard-name{font-family:'Lilita One',cursive;font-size:19px;color:var(--dark);}
// .scard-desc{font-size:13px;color:#888;line-height:1.65;flex:1;}
// .scard-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;}
// .scard-price{font-family:'Lilita One',cursive;font-size:26px;color:var(--red);}

// .stars{display:flex;gap:2px;}
// .star-f{color:#FFD200;font-size:13px;}
// .star-e{color:#DDD;font-size:13px;}

// .why-card{background:var(--light);border-radius:20px;padding:32px 24px;text-align:center;
//   border:2px solid var(--border);transition:transform .25s,box-shadow .25s;}
// .why-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,.08);}
// .why-icon{width:72px;height:72px;border-radius:20px;display:flex;align-items:center;
//   justify-content:center;font-size:34px;margin:0 auto 16px;}

// .testi-card{background:#fff;border-radius:20px;padding:28px 26px;border:2px solid var(--border);
//   transition:transform .25s,box-shadow .25s;}
// .testi-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(0,0,0,.08);}

// .cart-drawer{position:fixed;top:0;right:0;height:100%;width:400px;background:#fff;z-index:1100;
//   display:flex;flex-direction:column;box-shadow:-8px 0 40px rgba(0,0,0,.12);
//   transition:transform .38s cubic-bezier(.4,0,.2,1);}

// .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:1200;
//   display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
// .modal-box{background:#fff;border-radius:24px;padding:36px 32px;max-width:500px;width:100%;
//   max-height:90vh;overflow-y:auto;animation:modalIn .3s ease both;}
// @keyframes modalIn{from{opacity:0;transform:translateY(30px) scale(.97);}to{opacity:1;transform:none;}}

// .field{margin-bottom:16px;}
// .field label{display:block;font-size:13px;font-weight:800;color:#555;margin-bottom:6px;}
// .field input,.field select,.field textarea{width:100%;padding:11px 16px;border-radius:12px;
//   border:2px solid var(--border);font-size:14px;font-family:'Nunito',sans-serif;
//   outline:none;transition:border-color .2s;color:var(--dark);}
// .field input:focus,.field select:focus,.field textarea:focus{border-color:var(--dark);}
// .field textarea{resize:vertical;}

// .upload-zone{display:flex;flex-direction:column;align-items:center;justify-content:center;
//   gap:8px;padding:24px 16px;border-radius:14px;cursor:pointer;
//   border:2px dashed #ccc;background:var(--light);transition:all .2s;width:100%;}
// .upload-zone:hover{border-color:var(--dark);background:#f0f0f0;}

// .dash{min-height:100vh;background:var(--light);}
// .dash-top{background:#fff;border-bottom:2px solid var(--border);height:68px;
//   display:flex;align-items:center;justify-content:space-between;padding:0 32px;
//   position:sticky;top:0;z-index:100;}
// .dash-body{max-width:1140px;margin:0 auto;padding:36px 20px;}
// .stat-card{background:#fff;border-radius:16px;padding:24px 20px;border:2px solid var(--border);}
// .stat-val{font-family:'Lilita One',cursive;font-size:32px;}
// .stat-label{font-size:13px;color:#888;font-weight:700;margin-top:4px;}
// .dash-table{background:#fff;border-radius:18px;border:2px solid var(--border);overflow:hidden;}
// .dash-table table{width:100%;border-collapse:collapse;font-family:'Nunito',sans-serif;}
// .dash-table thead tr{background:var(--light);border-bottom:2px solid var(--border);}
// .dash-table th{padding:14px 18px;font-size:12px;font-weight:900;color:#888;
//   text-align:left;letter-spacing:.6px;text-transform:uppercase;}
// .dash-table td{padding:14px 18px;border-bottom:1px solid var(--border);}
// .dash-table tr:last-child td{border-bottom:none;}
// .dash-table tr:hover td{background:#fafafa;}

// .chip{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;text-transform:uppercase;}
// .status-badge{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:900;}

// .order-card{background:#fff;border-radius:18px;border:2px solid var(--border);padding:22px 24px;
//   margin-bottom:16px;transition:box-shadow .2s;}
// .order-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.07);}

// .tab-bar{display:flex;gap:6px;background:var(--light);border-radius:50px;padding:4px;border:2px solid var(--border);}
// .tab-btn{border:none;border-radius:50px;padding:9px 22px;font-size:13px;font-weight:900;
//   cursor:pointer;transition:all .2s;font-family:'Nunito',sans-serif;background:transparent;color:#888;}
// .tab-btn.active{background:var(--dark);color:#fff;}

// .search-wrap{position:relative;flex:1;min-width:180px;}
// .search-wrap input{width:100%;padding:10px 16px 10px 40px;border-radius:50px;
//   border:2px solid var(--border);font-size:13px;font-family:'Nunito',sans-serif;outline:none;}
// .search-wrap input:focus{border-color:var(--dark);}
// .search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#aaa;font-size:15px;}

// .cta-banner{background:var(--dark);border-radius:28px;padding:60px 48px;
//   display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:32px;margin:0 48px 80px;}

// .footer{background:var(--dark);padding:60px 48px 28px;}
// .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
// .footer-col-title{font-size:11px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;
//   color:rgba(255,255,255,.4);margin-bottom:16px;}
// .footer-col a,.footer-col p{display:block;font-size:13.5px;color:rgba(255,255,255,.6);line-height:2.2;text-decoration:none;}
// .footer-col a:hover{color:#fff;}

// @keyframes fadeUp{from{opacity:0;transform:translateY(36px);}to{opacity:1;transform:translateY(0);}}
// @keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-16px);}}
// @keyframes spin{from{transform:rotate(0);}to{transform:rotate(360deg);}}
// @keyframes toastIn{from{transform:translateY(60px) scale(.9);opacity:0;}to{transform:translateY(0) scale(1);opacity:1;}}
// @keyframes confettiFall{0%{transform:translateY(-10px) rotate(0);opacity:1;}100%{transform:translateY(110vh) rotate(540deg);opacity:0;}}
// @keyframes shimmer{0%{background-position:-400px 0;}100%{background-position:400px 0;}}

// .reveal{opacity:0;transform:translateY(36px);transition:opacity .6s ease,transform .6s ease;}
// .reveal.visible{opacity:1;transform:translateY(0);}
// .float{animation:floatY var(--fd,3.5s) ease-in-out infinite;animation-delay:var(--fdd,0s);}
// .spinner{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--red);
//   border-radius:50%;animation:spin .7s linear infinite;}
// .toast-pop{animation:toastIn .35s ease both;}
// .confetti-p{position:fixed;top:-10px;z-index:9999;pointer-events:none;
//   animation:confettiFall var(--d,3s) var(--dl,0s) linear forwards;}
// .skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);
//   background-size:800px 100%;animation:shimmer 1.5s infinite;border-radius:10px;}
// .progress-bar-wrap{height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:8px;width:100%;}
// .progress-bar{height:100%;background:linear-gradient(90deg,var(--red),var(--orange));border-radius:3px;transition:width .3s;}

// ::-webkit-scrollbar{width:6px;}
// ::-webkit-scrollbar-track{background:#f5f5f5;}
// ::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px;}

// @media(max-width:768px){
//   .nav{padding:0 20px;}
//   .nav-menu{display:none;}
//   .nav-menu.open{display:flex;flex-direction:column;gap:0;position:fixed;
//     top:72px;left:0;right:0;bottom:0;background:#fff;padding:32px 24px;
//     align-items:flex-start;border-top:2px solid var(--border);z-index:998;}
//   .nav-menu.open a{font-size:22px;padding:14px 0;border-bottom:1px solid var(--border);width:100%;}
//   .hamburger{display:block !important;}
//   .hero{padding:90px 24px 60px;flex-direction:column;}
//   .hero-img{display:none;}
//   .section{padding:60px 20px;}
//   .cta-banner{margin:0 20px 60px;padding:40px 28px;}
//   .footer{padding:48px 20px 24px;}
//   .footer-grid{grid-template-columns:1fr;}
//   .cart-drawer{width:100%;}
// }
// .hamburger{display:none;background:none;border:none;font-size:24px;cursor:pointer;color:var(--dark);}
// .pcard-img img{width:100%;height:100%;object-fit:cover;display:block;}
// .qty-btn{width:32px;height:32px;border-radius:50%;border:2px solid var(--border);
//   background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;
//   justify-content:center;font-weight:900;transition:all .2s;line-height:1;}
// .qty-btn:hover{background:var(--dark);color:#fff;border-color:var(--dark);}
// .qty-val{font-family:"Lilita One",cursive;font-size:18px;min-width:28px;text-align:center;}
// .in-stock{background:#D4EDDA;color:#155724;padding:3px 10px;border-radius:50px;
//   font-size:11px;font-weight:900;display:inline-block;}
// .out-stock{background:#F8D7DA;color:#721C24;padding:3px 10px;border-radius:50px;
//   font-size:11px;font-weight:900;display:inline-block;}
// .product-popup-img{width:100%;height:280px;object-fit:cover;border-radius:16px;
//   margin-bottom:20px;display:block;}
// @keyframes popupIn{from{opacity:0;transform:scale(.94) translateY(20px);}to{opacity:1;transform:scale(1) translateY(0);}}
// .product-popup{animation:popupIn .3s ease both;}

// `;

// /* ═══════════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════════ */
// const CATS = ["All","Toys","Balloons","Decoration","Candles & Cake Toppers","3D Decor","Gifts","Glow Sticks"];
// const TAG_COLORS = {
//   Bestseller:{bg:"#FF3B3B",text:"#fff"},
//   "Most Booked":{bg:"#9B30FF",text:"#fff"},
//   New:{bg:"#00C853",text:"#fff"},
//   Popular:{bg:"#1E90FF",text:"#fff"},
//   Trending:{bg:"#FF7A00",text:"#fff"},
// };
// const STATUS_COLORS = {
//   placed:           {bg:"#FFF3CD",text:"#856404"},
//   confirmed:        {bg:"#D1ECF1",text:"#0C5460"},
//   preparing:        {bg:"#E2D9F3",text:"#4A1A8C"},
//   out_for_delivery: {bg:"#D4EDDA",text:"#155724"},
//   delivered:        {bg:"#D4EDDA",text:"#155724"},
//   cancelled:        {bg:"#F8D7DA",text:"#721C24"},
// };
// const STATUS_LABELS = {
//   placed:"Order Placed",confirmed:"Confirmed",preparing:"Preparing",
//   out_for_delivery:"Out for Delivery",delivered:"Delivered",cancelled:"Cancelled",
// };

// /* ═══════════════════════════════════════════════════════════════
//    TINY ATOMS
// ═══════════════════════════════════════════════════════════════ */
// function Stars({n=5}){
//   return <div className="stars">{[1,2,3,4,5].map(i=><span key={i} className={i<=n?"star-f":"star-e"}>★</span>)}</div>;
// }
// function Chip({text}){
//   if(!text)return null;
//   const c=TAG_COLORS[text]||{bg:"#FF3B3B",text:"#fff"};
//   return <span className="chip" style={{background:c.bg,color:c.text}}>{text}</span>;
// }
// function StatusBadge({status}){
//   const s=STATUS_COLORS[status]||{bg:"#eee",text:"#555"};
//   return <span className="status-badge" style={{background:s.bg,color:s.text}}>{STATUS_LABELS[status]||status}</span>;
// }
// function Spinner({size=36}){
//   return <div className="spinner" style={{width:size,height:size,borderWidth:size>20?3:2}}/>;
// }
// function Confetti({active}){
//   if(!active)return null;
//   const cols=["#FF3B3B","#FFD200","#1E90FF","#00C853","#9B30FF","#FF7A00"];
//   return Array.from({length:50},(_,i)=>(
//     <div key={i} className="confetti-p" style={{left:`${Math.random()*100}%`,background:cols[i%cols.length],
//       "--d":`${2+Math.random()*2}s`,"--dl":`${Math.random()}s`,
//       width:`${6+Math.random()*8}px`,height:`${8+Math.random()*10}px`,
//       borderRadius:Math.random()>.5?"50%":"3px"}}/>
//   ));
// }

// /* ═══════════════════════════════════════════════════════════════
//    MODAL & FIELD
// ═══════════════════════════════════════════════════════════════ */
// function Modal({open,onClose,title,children,maxWidth=500}){
//   if(!open)return null;
//   return(
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-box" style={{maxWidth}} onClick={e=>e.stopPropagation()}>
//         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
//           <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#1A1A1A"}}>{title}</h3>
//           <button onClick={onClose} className="btn btn-icon" style={{width:34,height:34,fontSize:16}}>✕</button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }
// function Field({label,value,onChange,type="text",placeholder,as="input",options=[],required=false}){
//   const p={value,onChange:e=>onChange(e.target.value),placeholder,required};
//   return(
//     <div className="field">
//       <label>{label}{required&&" *"}</label>
//       {as==="select"?<select {...p}>{options.map(o=><option key={o}>{o}</option>)}</select>
//       :as==="textarea"?<textarea {...p} rows={3}/>
//       :<input type={type} {...p}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    IMAGE UPLOADER  (Cloudinary via backend)
// ═══════════════════════════════════════════════════════════════ */
// function ImageUploader({value,onChange}){
//   const [pct,setPct]=useState(0);
//   const [busy,setBusy]=useState(false);
//   const [err,setErr]=useState("");

//   const handle=async file=>{
//     if(!file)return;
//     setBusy(true);setErr("");setPct(10);
//     try{
//       const {url}=await API.uploadImage(file);
//       onChange(url);
//       setPct(100);
//     }catch(e){
//       // fallback to base64 if API not connected yet
//       const reader=new FileReader();
//       reader.onload=ev=>{onChange(ev.target.result);};
//       reader.readAsDataURL(file);
//       setErr("Using local preview (connect backend to save permanently)");
//     }
//     setBusy(false);setPct(0);
//   };

//   return(
//     <div className="field">
//       <label>Product Image</label>
//       <label className="upload-zone" htmlFor="img-up">
//         {busy
//           ?<><Spinner size={32}/><span style={{fontSize:13,fontWeight:700,color:"#666"}}>Uploading… {pct}%</span>
//             <div className="progress-bar-wrap"><div className="progress-bar" style={{width:`${pct}%`}}/></div></>
//           :<><span style={{fontSize:30}}>📁</span>
//             <span style={{fontSize:13,fontWeight:800,color:"#555"}}>Click to upload from your computer</span>
//             <span style={{fontSize:11,color:"#aaa"}}>JPG · PNG · WEBP (max 5MB)</span></>
//         }
//         <input id="img-up" type="file" accept="image/*" style={{display:"none"}}
//           onChange={e=>handle(e.target.files[0])} disabled={busy}/>
//       </label>
//       {err&&<p style={{color:"#FF7A00",fontSize:12,marginTop:6}}>⚠️ {err}</p>}
//       <div style={{display:"flex",alignItems:"center",gap:8,margin:"10px 0"}}>
//         <div style={{flex:1,height:1,background:"#eee"}}/>
//         <span style={{fontSize:11,color:"#bbb",fontWeight:800}}>OR PASTE URL</span>
//         <div style={{flex:1,height:1,background:"#eee"}}/>
//       </div>
//       <input type="text" value={value?.startsWith?.("data:")?"":value||""} onChange={e=>onChange(e.target.value)}
//         placeholder="https://images.unsplash.com/…"
//         style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"2px solid #eee",
//           fontSize:13,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
//       {value&&(
//         <div style={{position:"relative",marginTop:10}}>
//           <img src={value} alt="preview" style={{width:"100%",height:130,objectFit:"cover",
//             borderRadius:12,border:"2px solid #eee",display:"block"}}/>
//           <button onClick={()=>onChange("")} style={{position:"absolute",top:8,right:8,background:"rgba(0,0,0,.6)",
//             border:"none",borderRadius:6,color:"#fff",padding:"4px 9px",cursor:"pointer",fontSize:12,fontWeight:700}}>✕</button>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    SCROLL REVEAL HOOK
// ═══════════════════════════════════════════════════════════════ */
// function useReveal(dep){
//   useEffect(()=>{
//     const t=setTimeout(()=>{
//       const els=document.querySelectorAll(".reveal:not(.visible)");
//       const obs=new IntersectionObserver(en=>{
//         en.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
//       },{threshold:.08,rootMargin:"0px 0px -30px 0px"});
//       els.forEach(el=>{
//         const r=el.getBoundingClientRect();
//         if(r.top<window.innerHeight&&r.bottom>0)el.classList.add("visible");
//         else obs.observe(el);
//       });
//       return()=>obs.disconnect();
//     },40);
//     return()=>clearTimeout(t);
//   },[dep]);
// }

// /* ═══════════════════════════════════════════════════════════════
//    RAZORPAY CHECKOUT
// ═══════════════════════════════════════════════════════════════ */
// function loadRazorpayScript(){
//   return new Promise(resolve=>{
//     if(document.getElementById("rzp-script")){resolve(true);return;}
//     const s=document.createElement("script");
//     s.id="rzp-script";
//     s.src="https://checkout.razorpay.com/v1/checkout.js";
//     s.onload=()=>resolve(true);
//     s.onerror=()=>resolve(false);
//     document.body.appendChild(s);
//   });
// }

// async function initiateRazorpayPayment({amount, orderDetails, user, onSuccess, onError}){
//   const loaded=await loadRazorpayScript();
//   if(!loaded){onError("Failed to load Razorpay. Check your internet connection.");return;}

//   try{
//     const {orderId, key}=await API.createRazorpayOrder(amount);
//     const options={
//       key,
//       amount: amount*100,
//       currency:"INR",
//       name:"PartyMashup",
//       description:"Party Supplies & Decoration",
//       image:"https://i.imgur.com/n5tjHFD.png",
//       order_id: orderId,
//       prefill:{ name:user.name, email:user.email, contact:user.phone||"" },
//       theme:{ color:"#FF3B3B" },
//       handler: async(response)=>{
//         onSuccess({...response, rzpOrderId: orderId});
//       },
//       modal:{ ondismiss: ()=>onError("Payment cancelled") },
//     };
//     const rzp=new window.Razorpay(options);
//     rzp.open();
//   }catch(e){ onError(e.message); }
// }

// /* ═══════════════════════════════════════════════════════════════
//    CART DRAWER
// ═══════════════════════════════════════════════════════════════ */
// function CartDrawer({cart,open,onClose,onRemove,onCheckout}){
//   const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
//   return(
//     <>
//       {open&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",zIndex:1099}} onClick={onClose}/>}
//       <div className="cart-drawer" style={{transform:open?"translateX(0)":"translateX(100%)"}}>
//         <div style={{padding:"24px 24px 18px",borderBottom:"2px solid var(--border)",
//           display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22}}>🛍️ Cart <span style={{fontSize:14,fontWeight:700,color:"#aaa"}}>({cart.length})</span></h3>
//           <button className="btn btn-icon" onClick={onClose}>✕</button>
//         </div>
//         <div style={{flex:1,overflowY:"auto",padding:"0 24px"}}>
//           {cart.length===0
//             ?<div style={{textAlign:"center",padding:"60px 0",color:"#bbb"}}>
//                <div style={{fontSize:56}}>🛒</div>
//                <p style={{marginTop:12,fontWeight:800,fontSize:16}}>Cart is empty</p>
//              </div>
//             :cart.map(item=>(
//               <div key={item.id} style={{display:"flex",gap:14,padding:"14px 0",
//                 borderBottom:"1px solid var(--border)",alignItems:"center"}}>
//                 <img src={item.img} alt={item.name}
//                   style={{width:58,height:58,objectFit:"cover",borderRadius:10,border:"2px solid var(--border)"}}/>
//                 <div style={{flex:1}}>
//                   <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
//                   <p style={{fontSize:13,color:"var(--red)",fontWeight:900}}>₹{item.price} × {item.qty}</p>
//                 </div>
//                 <button onClick={()=>onRemove(item.id)}
//                   style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"5px 10px",
//                     color:"#DC2626",cursor:"pointer",fontWeight:800}}>✕</button>
//               </div>
//             ))
//           }
//         </div>
//         {cart.length>0&&(
//           <div style={{padding:"18px 24px",borderTop:"2px solid var(--border)"}}>
//             <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
//               <span style={{fontWeight:700,fontSize:16}}>Total</span>
//               <span style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
//             </div>
//             <button className="btn btn-primary" style={{width:"100%",borderRadius:14}} onClick={onCheckout}>
//               🛒 Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    CHECKOUT MODAL
// ═══════════════════════════════════════════════════════════════ */
// function CheckoutModal({open,onClose,cart,user,onSuccess}){
//   const [form,setForm]=useState({address:user?.address||"",eventDate:"",note:""});
//   const [payMethod,setPayMethod]=useState("cod");
//   const [loading,setLoading]=useState(false);
//   const [err,setErr]=useState("");
//   const total=cart.reduce((s,i)=>s+i.price*i.qty,0);

//   const f=v=>setForm(p=>({...p,...v}));

//   const handlePlaceOrder=async()=>{
//     if(!form.address.trim()){setErr("Please enter delivery address");return;}
//     setLoading(true);setErr("");
//     const items=cart.map(i=>({itemId:i.id||i._id,name:i.name,img:i.img,price:i.price,qty:i.qty,
//       type:i.category?"product":"service"}));
//     try{
//       if(payMethod==="cod"){
//         const order=await API.placeOrder({items,total,address:form.address,
//           eventDate:form.eventDate,note:form.note,paymentMethod:"cod"});
//         onSuccess(order);
//       }else{
//         await initiateRazorpayPayment({
//           amount:total, orderDetails:{items,total}, user,
//           onSuccess:async(rzpRes)=>{
//             const order=await API.placeOrder({items,total,address:form.address,
//               eventDate:form.eventDate,note:form.note,paymentMethod:"razorpay",
//               razorpayOrderId:rzpRes.rzpOrderId});
//             await API.verifyPayment({
//               razorpay_order_id:rzpRes.razorpay_order_id,
//               razorpay_payment_id:rzpRes.razorpay_payment_id,
//               razorpay_signature:rzpRes.razorpay_signature,
//               orderId:order._id,
//             });
//             onSuccess(order);
//           },
//           onError:(msg)=>{setErr(msg);setLoading(false);},
//         });
//         return;
//       }
//     }catch(e){setErr(e.message);}
//     setLoading(false);
//   };

//   return(
//     <Modal open={open} onClose={onClose} title="🛒 Checkout" maxWidth={520}>
//       <div style={{marginBottom:20}}>
//         <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>ORDER SUMMARY</p>
//         {cart.map(i=>(
//           <div key={i.id} style={{display:"flex",justifyContent:"space-between",
//             fontSize:13,fontWeight:700,marginBottom:6,color:"#555"}}>
//             <span>{i.name} × {i.qty}</span>
//             <span>₹{(i.price*i.qty).toLocaleString()}</span>
//           </div>
//         ))}
//         <div style={{borderTop:"2px solid var(--border)",marginTop:10,paddingTop:10,
//           display:"flex",justifyContent:"space-between"}}>
//           <span style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>Total</span>
//           <span style={{fontFamily:"'Lilita One',cursive",fontSize:20,color:"var(--red)"}}>₹{total.toLocaleString()}</span>
//         </div>
//       </div>

//       <Field label="Delivery Address" value={form.address} onChange={v=>f({address:v})}
//         as="textarea" placeholder="Full address, area, city…" required/>
//       <Field label="Event Date (optional)" value={form.eventDate} onChange={v=>f({eventDate:v})} type="date"/>
//       <Field label="Special Instructions (optional)" value={form.note} onChange={v=>f({note:v})}
//         as="textarea" placeholder="Theme, no. of guests, indoor/outdoor…"/>

//       <div style={{marginBottom:16}}>
//         <p style={{fontWeight:800,fontSize:13,color:"#888",marginBottom:10}}>PAYMENT METHOD</p>
//         <div style={{display:"flex",gap:10}}>
//           {[["cod","💵 Cash on Delivery"],["razorpay","💳 Pay Online (Razorpay)"]].map(([v,l])=>(
//             <button key={v} onClick={()=>setPayMethod(v)}
//               style={{flex:1,padding:"12px",borderRadius:12,fontWeight:800,fontSize:13,cursor:"pointer",
//                 fontFamily:"'Nunito',sans-serif",
//                 background:payMethod===v?"var(--dark)":"var(--light)",
//                 color:payMethod===v?"#fff":"#555",
//                 border:`2px solid ${payMethod===v?"var(--dark)":"var(--border)"}`}}>
//               {l}
//             </button>
//           ))}
//         </div>
//       </div>

//       {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
//       <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
//         onClick={handlePlaceOrder} disabled={loading}>
//         {loading?"Processing…":payMethod==="cod"?"✅ Place Order (COD)":"💳 Pay ₹"+total.toLocaleString()}
//       </button>
//     </Modal>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    AUTH MODAL  (login + register)
// ═══════════════════════════════════════════════════════════════ */
// function AuthModal({open,onClose,onAuth}){
//   const [mode,setMode]=useState("login");
//   const [form,setForm]=useState({name:"",email:"",password:"",phone:""});
//   const [loading,setLoading]=useState(false);
//   const [err,setErr]=useState("");
//   const f=v=>setForm(p=>({...p,...v}));

//   const handle=async()=>{
//     setLoading(true);setErr("");
//     try{
//       const data=mode==="login"
//         ?await API.login({email:form.email,password:form.password})
//         :await API.register({name:form.name,email:form.email,password:form.password,phone:form.phone});
//       localStorage.setItem("pm_token",data.token);
//       localStorage.setItem("pm_user",JSON.stringify(data.user));
//       onAuth(data.user);
//       onClose();
//     }catch(e){setErr(e.message);}
//     setLoading(false);
//   };

//   return(
//     <Modal open={open} onClose={onClose} title={mode==="login"?"🔑 Login":"✨ Create Account"}>
//       <div className="tab-bar" style={{marginBottom:20}}>
//         {[["login","Login"],["register","Sign Up"]].map(([m,l])=>(
//           <button key={m} className={`tab-btn${mode===m?" active":""}`} onClick={()=>{setMode(m);setErr("");}}>
//             {l}
//           </button>
//         ))}
//       </div>
//       {mode==="register"&&<Field label="Full Name" value={form.name} onChange={v=>f({name:v})} placeholder="Rahul Sharma" required/>}
//       <Field label="Email" value={form.email} onChange={v=>f({email:v})} type="email" placeholder="you@email.com" required/>
//       {mode==="register"&&<Field label="Phone" value={form.phone} onChange={v=>f({phone:v})} type="tel" placeholder="+91 98765 43210"/>}
//       <Field label="Password" value={form.password} onChange={v=>f({password:v})} type="password" placeholder="••••••••" required/>
//       {err&&<p style={{color:"#DC2626",fontSize:13,marginBottom:12,fontWeight:700}}>⚠️ {err}</p>}
//       <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:15,fontSize:15}}
//         onClick={handle} disabled={loading}>
//         {loading?"Please wait…":mode==="login"?"Login →":"Create Account →"}
//       </button>
//       <p style={{textAlign:"center",marginTop:14,fontSize:13,color:"#888",fontWeight:700}}>
//         {mode==="login"?"Don't have an account? ":"Already have an account? "}
//         <span style={{color:"var(--red)",cursor:"pointer"}} onClick={()=>{setMode(mode==="login"?"register":"login");setErr("");}}>
//           {mode==="login"?"Sign Up":"Login"}
//         </span>
//       </p>
//     </Modal>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    MY ORDERS PAGE
// ═══════════════════════════════════════════════════════════════ */
// function MyOrders({onClose}){
//   const [orders,setOrders]=useState([]);
//   const [loading,setLoading]=useState(true);
//   const [cancelling,setCancelling]=useState(null);

//   useEffect(()=>{
//     API.getMyOrders().then(setOrders).catch(()=>{}).finally(()=>setLoading(false));
//   },[]);

//   const cancel=async id=>{
//     setCancelling(id);
//     try{
//       const updated=await API.cancelOrder(id);
//       setOrders(p=>p.map(o=>o._id===id?updated:o));
//     }catch(e){alert(e.message);}
//     setCancelling(null);
//   };

//   return(
//     <Modal open={true} onClose={onClose} title="📦 My Orders" maxWidth={680}>
//       {loading?<div style={{display:"flex",justifyContent:"center",padding:40}}><Spinner/></div>
//       :orders.length===0
//         ?<div style={{textAlign:"center",padding:"40px 0",color:"#bbb"}}>
//            <div style={{fontSize:56}}>📦</div>
//            <p style={{marginTop:12,fontWeight:800,fontSize:16}}>No orders yet!</p>
//          </div>
//         :orders.map(o=>(
//           <div key={o._id} className="order-card">
//             <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:12}}>
//               <div>
//                 <p style={{fontFamily:"'Lilita One',cursive",fontSize:16}}>#{o.orderId}</p>
//                 <p style={{fontSize:12,color:"#aaa",marginTop:2}}>{new Date(o.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</p>
//               </div>
//               <div style={{display:"flex",alignItems:"center",gap:8}}>
//                 <StatusBadge status={o.status}/>
//                 {!["delivered","cancelled"].includes(o.status)&&(
//                   <button className="btn btn-sm" style={{background:"#FEE2E2",color:"#DC2626",borderRadius:8}}
//                     onClick={()=>cancel(o._id)} disabled={cancelling===o._id}>
//                     {cancelling===o._id?"…":"Cancel"}
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
//               {o.items.map((item,i)=>(
//                 <div key={i} style={{display:"flex",alignItems:"center",gap:8,background:"var(--light)",
//                   borderRadius:10,padding:"6px 10px"}}>
//                   <img src={item.img} alt={item.name} style={{width:32,height:32,objectFit:"cover",borderRadius:6}}/>
//                   <span style={{fontSize:12,fontWeight:700}}>{item.name} ×{item.qty}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//               <span style={{fontSize:13,color:"#888",fontWeight:700}}>
//                 {o.paymentMethod==="cod"?"💵 Cash on Delivery":"💳 Online Payment"} · {o.paymentStatus==="paid"?"Paid":"Pending"}
//               </span>
//               <span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{o.total.toLocaleString()}</span>
//             </div>
//           </div>
//         ))
//       }
//     </Modal>
//   );
// }


// /* ═══════════════════════════════════════════════════════════════
//    PRODUCT DETAIL POPUP
// ═══════════════════════════════════════════════════════════════ */
// function ProductPopup({item,onClose,onAdd}){
//   const [qty,setQty]=useState(1);
//   const inStock=(item.stock??99)>0;
//   const imgSrc=item.img?.includes("unsplash.com")
//     ? item.img.replace(/w=\d+/,"w=600").replace(/q=\d+/,"q=80")
//     : item.img;
//   const handle=()=>{
//     for(let i=0;i<qty;i++)onAdd(item);
//     onClose();
//   };
//   return(
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-box product-popup" style={{maxWidth:520,padding:0,overflow:"hidden",borderRadius:24}} onClick={e=>e.stopPropagation()}>
//         {/* Image */}
//         <div style={{position:"relative"}}>
//           <img src={imgSrc} alt={item.name}
//             style={{width:"100%",height:280,objectFit:"cover",display:"block"}}/>
//           <button onClick={onClose}
//             style={{position:"absolute",top:12,right:12,background:"rgba(0,0,0,.55)",border:"none",
//               borderRadius:"50%",width:34,height:34,color:"#fff",fontSize:18,cursor:"pointer",
//               display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
//           {item.tag&&(
//             <div style={{position:"absolute",top:12,left:12,background:"#FF3B3B",color:"#fff",
//               fontSize:10,fontWeight:900,padding:"4px 12px",borderRadius:50,textTransform:"uppercase"}}>
//               {item.tag}
//             </div>
//           )}
//         </div>
//         {/* Content */}
//         <div style={{padding:"22px 26px 28px"}}>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,marginBottom:8}}>
//             <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#1A1A1A",lineHeight:1.2}}>{item.name}</h2>
//             {inStock
//               ?<span className="in-stock">✓ In Stock ({item.stock??99})</span>
//               :<span className="out-stock">✗ Out of Stock</span>}
//           </div>
//           <p style={{fontSize:13,color:"#888",lineHeight:1.7,marginBottom:16}}>{item.desc||"Premium quality party item."}</p>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
//             <span style={{fontFamily:"'Lilita One',cursive",fontSize:30,color:"#FF3B3B"}}>₹{item.price?.toLocaleString()}</span>
//             <div style={{display:"flex",alignItems:"center",gap:12}}>
//               <button className="qty-btn" onClick={()=>setQty(q=>Math.max(1,q-1))}>−</button>
//               <span className="qty-val">{qty}</span>
//               <button className="qty-btn" onClick={()=>setQty(q=>Math.min(item.stock??99,q+1))}>+</button>
//             </div>
//           </div>
//           <p style={{fontSize:12,color:"#aaa",marginBottom:16}}>
//             Total: <strong style={{color:"#1A1A1A"}}>₹{(item.price*qty).toLocaleString()}</strong>
//           </p>
//           <button className="btn btn-primary" style={{width:"100%",borderRadius:14,padding:14,fontSize:15}}
//             onClick={handle} disabled={!inStock}>
//             {inStock?"🛒 Add to Cart":"😔 Out of Stock"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    PRODUCT CARD
// ═══════════════════════════════════════════════════════════════ */
// function PCard({item,onAdd,isService}){
//   const [added,setAdded]=useState(false);
//   const [loaded,setLoaded]=useState(false);
//   const [showPopup,setShowPopup]=useState(false);
//   const handle=e=>{e.stopPropagation();onAdd(item);setAdded(true);setTimeout(()=>setAdded(false),1600);};
//   const tc=TAG_COLORS[item.tag];
//   const inStock=(item.stock??99)>0;
//   const imgSrc=item.img?.includes("unsplash.com")
//     ? item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
//     : item.img;
//   return(
//     <>
//     <div className="pcard" onClick={()=>!isService&&setShowPopup(true)} style={{cursor:isService?"default":"pointer"}}>
//       {item.tag&&<div className="pcard-ribbon" style={{background:tc?.bg||"#FF3B3B",color:tc?.text||"#fff"}}>{item.tag}</div>}
//       {!inStock&&<div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,.7)",zIndex:3,
//         display:"flex",alignItems:"center",justifyContent:"center",borderRadius:20}}>
//         <span className="out-stock" style={{fontSize:14,padding:"6px 18px"}}>Out of Stock</span>
//       </div>}
//       <div className="pcard-img">
//         <div style={{position:"absolute",inset:0,background:"#f0f0f0",
//           opacity:loaded?0:1,transition:"opacity .4s ease",zIndex:1}}/>
//         <img src={imgSrc} alt={item.name}
//           loading="lazy" decoding="async"
//           style={{opacity:loaded?1:0,transition:"opacity .4s ease",width:"100%",height:"100%",objectFit:"cover",display:"block"}}
//           onLoad={()=>setLoaded(true)} onError={()=>setLoaded(true)}/>
//       </div>
//       <div className="pcard-body">
//         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <p className="pcard-cat">{item.category||"Service"}</p>
//           {inStock
//             ?<span className="in-stock">In Stock</span>
//             :<span className="out-stock">Out of Stock</span>}
//         </div>
//         <Stars n={4+(item._id?.charCodeAt?.(item._id.length-1)%2||0)}/>
//         <h3 className="pcard-name">{item.name}</h3>
//         <p className="pcard-desc">{item.desc}</p>
//         <div className="pcard-foot">
//           <span className="pcard-price">₹{item.price.toLocaleString()}</span>
//           <button className="btn btn-primary btn-sm" onClick={handle}
//             disabled={!inStock}
//             style={{background:added?"var(--green)":!inStock?"#ccc":"",
//               boxShadow:added?"0 4px 14px rgba(0,200,83,.35)":""}}>
//             {added?"✓ Added":isService?"Book":"+ Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//     {showPopup&&<ProductPopup item={item} onClose={()=>setShowPopup(false)} onAdd={onAdd}/>}
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    CUSTOMER PORTAL
// ═══════════════════════════════════════════════════════════════ */
// function CustomerPortal({user,onAuthOpen,onLogout,onOwnerClick}){
//   const [tab,setTab]=useState("products");
//   const [cat,setCat]=useState("All");
//   const [search,setSearch]=useState("");
//   const [products,setProducts]=useState([]);
//   const [services,setServices]=useState([]);
//   const [loadingData,setLoadingData]=useState(true);
//   const [cart,setCart]=useState([]);
//   const [cartOpen,setCartOpen]=useState(false);
//   const [checkout,setCheckout]=useState(false);
//   const [orders,setOrders]=useState(false);
//   const [confetti,setConfetti]=useState(false);
//   const [toast,setToast]=useState("");
//   const [mobileNav,setMobileNav]=useState(false);

//   const homeRef=useRef(),productsRef=useRef(),servicesRef=useRef(),contactRef=useRef();

//   // Load products & services from backend
//   useEffect(()=>{
//     setLoadingData(true);
//     Promise.all([API.getProducts(),API.getServices()])
//       .then(([p,s])=>{
//         setProducts(p);
//         setServices(s);
//         // Preload first 4 product images for instant display
//         p.slice(0,4).forEach(item=>{
//           if(item.img){
//             const link=document.createElement("link");
//             link.rel="preload";
//             link.as="image";
//             link.href=item.img?.includes("unsplash.com")
//               ? item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
//               : item.img;
//             document.head.appendChild(link);
//           }
//         });
//       })
//       .catch(()=>{})
//       .finally(()=>setLoadingData(false));
//   },[]);

//   const filtered=(tab==="products"?products:services).filter(p=>{
//     const mc=tab==="services"||cat==="All"||p.category===cat;
//     const ms=p.name.toLowerCase().includes(search.toLowerCase());
//     return mc&&ms;
//   });

//   useReveal(`${tab}|${cat}|${search}|${filtered.length}`);

//   const scrollTo=useCallback(r=>{
//     setMobileNav(false);
//     setTimeout(()=>r?.current?.scrollIntoView({behavior:"smooth",block:"start"}),80);
//   },[]);

//   const addToCart=item=>{
//     setCart(prev=>{
//       const id=item._id||item.id;
//       const ex=prev.find(i=>(i._id||i.id)===id);
//       return ex?prev.map(i=>(i._id||i.id)===id?{...i,qty:i.qty+1}:i):[...prev,{...item,id,qty:1}];
//     });
//     setToast(`🎉 ${item.name} added!`);
//     setTimeout(()=>setToast(""),2200);
//   };

//   const cartCount=cart.reduce((s,i)=>s+i.qty,0);

//   const handleOrderSuccess=order=>{
//     setConfetti(true);setTimeout(()=>setConfetti(false),3500);
//     setCart([]);setCheckout(false);
//     setToast(`🎊 Order #${order.orderId} placed! We'll contact you shortly.`);
//     setTimeout(()=>setToast(""),5000);
//   };

//   return(
//     <div style={{background:"#fff"}}>
//       <Confetti active={confetti}/>

//       {/* NAVBAR */}
//       <nav className="nav">
//         <a className="nav-logo" onClick={e=>{e.preventDefault();scrollTo(homeRef);}} href="#">
//           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBkAGQAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAACtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADx8DtRvwSqK+iTcXUfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPgC3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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//EAAL/2gAMAwEAAgADAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDPNGMMONCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBFLDKIABPPOBBAAAAAAAAABHLNAEAAAAAAMFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLGNEAIAIEMEAEAAPGPACAAAABIKIAAAAAAAAAAEFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDFKAAAAAAAAAAAAAAAAAMHDLCAHIIAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLOIIAAAAAAAAAAAAAAAAAAAAEEPGEAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGGIAAAAAAAAAAAAAAAAAAAAAAAAJEOAAAAAAAAAAAAAAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPEAAAAAAAAAAAAAAAAAAAAAAAAAAJANPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEKAAAAAAAAAAAAAAAAAAAAAAAAACDAAAAANCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAPCAAAAAEFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAAAAAAAAAAAAAAAAAAAAAAAAMOAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCAAAAAAAAAAAAAAAAAAAAAAAAAFNIAAAAAAAAPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCAAAAAAAAAAAAAAAADCAAAAAAHBKAAAAAAAAANPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAECAAAAAFGDIAAAAAAAAABBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAABLDCAAAAGCAAAENAAAABKAOAAAAAAAAAAFEKAAAABAAAAACDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJAAAAAAMIAAAAEKAAAAPAAAAGIBIAAAAAAAAAAEACAAABDAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAEDAAABAAAAHCAABGBEAAAAAAAAAAAAABAAABDAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAMAAAABAAAICAAHIGAAAAAAAAAAAAAABAABBNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAABCAABCAANAAAAAMAAAAAAAAAAAAFAFAAAGFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCAAAAAAAAAGDAAEDAAOIAPAACAAAAAAAAAAAAJABAAGIFAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNAAAAAAAAAKMAAAEIBLAECAGAAAAAAAAAAAAAFAKAFAAFAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKAAAAAAAAKAJAAAPEIAGABKAAAAAAAAAAAAACBIBOAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOCAAAAAAAKAEIAABGIEAADAAAAAAAAAAAAALACAEEAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJJAAAAAAAKAANAAALANAACAAAAAAAAAAAAACAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPBAAAAAKAAEIAAANCAFIAAAAAAAAAAAAHACAAKAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMBLCAELDCHLCAEJAAMAAAAAAAAAAAADIHCACAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBCBDAAAAAMEPJDPONEEDAGIAHIDKAAAAAAAAABJHAAHAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCHIONBEMHPDAAAAAAECAAAAAKJAAKAEFICAAAAABPIPAABGIAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOMIAAAAAAEAOCAAAAAAKAAAAECKABIAAEGHHLDHHHCEAAAEEAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGKIAAAAAAAAAAAIAAAAAAKAAAAABIAHNCAAAEEMMIIAAAAABAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHMAAAAAAAAAAAAAAAAAAAAKAAAABCAEJALAAAAAAAAAAAAAAHIAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEGAAAAAAAAAAAAAAAAAAAAAKAAAAAAALLAFKAAAAAAAAAAAABJAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAAAAAAAAAAAAAAAAAAAAKAAAAEABBKAALAAAAAAAAAAAAGEAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAGEJAABCAAAAAAAAAAAJIAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIAAAAAAAAAAAAAAAAAAAAAAAKAAAKAECAIAAAIAAAAAAAAAACGAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAKAAACAKAAEKAAECAAAAAAAABPIAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFIAAAAAAAAAAAAAAAAAAAAAAAAKAAJAECAAANCAAKCAAAAAAAGCAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAKABGBIAAAAADAAEKAAAAAABOAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAKABAGAAAAAABCAABAAAAAADKAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAKAKBMAAAAAAACAAABAAAABJAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAKFBNAAAAAAAAAKAABCAAABKAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAOODAAAAAAAAAAGAAEDAAAAIAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCAAAAAAAAAAAAAAAAAAAAAAAAKPKAAAAAAAAAAFIAAEIAGEAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANIAAAAAAAAAAAAAAAAAAAAAAAALGAAAAAAAAAAAAFAAAPBJIAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHAAAAAAAAAAAAAAAAAAAAAABAOAAAAAAAAAAAAAELAABEMAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAAAAAAABPAKAAAAAAAAAAAAAAMAAAMAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAAAAAAAAAAAAAAAAAAHBAKAAAAAAAAAAAAAAALAAKAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAAAAAAAAAAAAAAAAAAFPAEIAAAAAAAAAAAAAAAMCEIAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAABFBAAFCAAAAAAAAAAAAAAAEHKAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENBAAAAAAAAAAAAACEEAAAHCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECHAAAAAAAAAACOOGAAAAHPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEABDDAAAABGNCAAAAAAGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMNPHMNAMAAAAAAABKECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAJADAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAEKDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEIAAAAAAAAEMEAAAAAAAAAAAAAAAAAAAAAAAAEMAAAAAAAMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNONPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNJANICBCPKOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPONNAEIFHPGEEFPONPPPPPPPPPLINDPPPPPPLIGJNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIDACPDHDLPPLHPHDCOPOPPPPPPPCLPPPPPPPPPPPOCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNEOPHPPPPPPPPPPPPPPPPPPPMPPJCLPPPPPPPPPPPPPPLCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLBBPPPPPPPPPPPPPPPPPPPPPPDDEAHPPPPPPPPPPPPPPPPMIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKCMPPPPPPPPPPPPPPPPPPPPPPPPKIKFPPPPPPPPPPPPPPPPPKLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNNBPPPPPPPPPPPPPPPPPPPPPPPPPMIPMGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLELPPPPPPPPPPPPPPPPPPPPPPPPPIDPPPOBNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGDPPPPLJFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDNPPPPPPPPPPPPPPPPPPPPPPPPPIBNPPPPPPNNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAHPPPPPPPPPPPPPPPPPPPPPPPPOJAPPPPPPPHGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIHPPPPPPPPPPPPPPPPPPPPPPPPOOGNPPPPPPPLENPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPANPPPPPPPPPPPPPPPPMNPPPPPPOOLPPPPPPPPPAMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLEPPPPPPPPPPPPPPPPPJPPPPPPPDNPPPPPPPPPPKPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLIPPPPPKCBDDDDANPPPLFPPPPOBPLPPPPPPPPPPOLFPPPPFDDDDDDBFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLGPPPPPPPKPPPPLNPPPPOHPPPMHLPPPPPPPPPPPKPNPPPPFPPPPJDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOAPPPPPPPPGOPPPOPPPPAPPPODOBPPPPPPPPPPPKPOPPPNFPPPIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPIPPPPOPPPFFPPEHMPPPPPPPPPPPPLPLPPONHPPPBPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPINPPPPPPPPKDNPPONPPAHPPPPBPPPPPPPPPPPPOPKPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCNPPPPPPPPKBEPPLNPPIHPIPPHPPPPPPPPPPPPKPKPKHHPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLAPPPPPPPPKFGNPPPHLAPONPMPPPPPPPPPPPPPAPDPOHPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFMPPPPPPPKFPPPPPJODPLPPFPPPPPPPPPPPPLFOFODPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKJOPPPPPPKFPLFPPOOHLPPJPPPPPPPPPPPPPJPMHPFPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDGOPPPPPKFPPIPPPAPIPPPPPPPPPPPPPPPKFPBPMHPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNFPPPPKFPPPFPPOPFPOHPPPPPPPPPPPPIPPHKGPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHKKGMNLPNPPINPPAPPLPPPPPPPPPPPPPHINOAHPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPONNPPPPHODCLIAGLPOODHPJFBOPPPPPPPPPLGJBPHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPENJDNKCFINPPPPPPLNPPPPGAKPPHPLFFNPPPPPMOGHHPOLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLCBFHPPPPPPKKNPPPPPKFPPPPPEFPPGPPHKFEEIMFAPPPPPKLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMCHPPPPPPPPPPPHPPPPPKFPPPPPKHPJDNPPPPPLHDLPPPPPPNHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHFPPPPPPPPPPPPPPPPPPPKFPPPPONPKCHCPPPPPPPPPPPPPPKOPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPPPPPKFPPPPKPPAIPOPPPPPPPPPPPPPOIPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCDPPPPPPPPPPPPPPPPPPPPPKFPPPPLPPKFPPINPPPPPPPPPPPKPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIIPPPPPPPPPPPPPPPPPPPPPPKFPPPNHPOPMPPONPPPPPPPPPPOPFPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJNPPPPPPPPPPPPPPPPPPPPPPKFPPPNPKNPLPPPHPPPPPPPPPPEMPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDPPPPPPPPPPPPPPPPPPPPPPPKFPPPFPDPPONPPLNPPPPPPPPOGHPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNHPPPPPPPPPPPPPPPPPPPPPPPKFPPAPLHPPPKNPPENPPPPPPPEJPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCHPPPPPPPPPPPPPPPPPPPPPPPKFPODOHPPPPPMPPLNPPPPPPPCNPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBHPPPPPPPPPPPPPPPPPPPPPPPKFPNPPPPPPPPCNPPOPPPPPPIBPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKFPPPJPPPPPPPGPPPOPPPPPDHPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKEIOCPPPPPPPPPFPPONPPPJPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPPPPPPPPPPPPPPPPPPPPPPPPKFJIHPPPPPPPPPCPPLNPPPLHPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPKFADPPPPPPPPPPPFPPPHPIBPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGHPPPPPPPPPPPPPPPPPPPPPPPKENPPPPPPPPPPPPJPPPJPDPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKGPPPPPPPPPPPPPPPPPPPPPPOKFHPPPPPPPPPPPPHGPPOJLPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLOFPPPPPPPPPPPPPPPPPPPPOKKFPPPPPPPPPPPPPPEPPPDHPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNNPPPPPPPPPPPPPPPPPPPMJKFPPPPPPPPPPPPPPLOPPNPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLHGPPPPPPPPPPPPPPPPPPMJPOHPPPPPPPPPPPPPPPDNPFPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDIOPPPPPPPPPPPPPPPPEJPPOFPPPPPPPPPPPPPPPLLEPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCBHPPPPPPPPPPPPPNEFPPPMOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGKMPPPPPPPPPOIIPPPPPIAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJHGEPNPOPMFMLHPPPPPBAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDHKAIDFPDPPPPPPPLFKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPLMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHPPLFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBPPPEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMDPPPPKNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMJHPPPPPPLBMPPPPPPPPPPPPPPPPPPPPPPPPPPPEPPPPLKHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDDHPPPPPPPPLHDOPPPPPPPPPPPPPPPPPPPPPPLLDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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"
//             alt="PartyMashup Logo"
//             style={{width:44,height:44,objectFit:"contain",borderRadius:8}}/>
//           <span className="nav-logo-text">Party<span>Mashup</span></span>
//         </a>
//         <ul className={`nav-menu${mobileNav?" open":""}`}>
//           {[["Home",homeRef],["Products",productsRef],["Services",servicesRef],["Contact",contactRef]].map(([l,r])=>(
//             <li key={l}><a onClick={e=>{e.preventDefault();scrollTo(r);}} href="#">{l}</a></li>
//           ))}
//           {user?.role==="owner"&&(
//             <li><a onClick={e=>{e.preventDefault();onOwnerClick();}} href="#"
//               style={{background:"var(--dark)",color:"#FFD200",padding:"8px 18px",borderRadius:50}}>
//               ⚙️ Dashboard
//             </a></li>
//           )}
//         </ul>
//         <div style={{display:"flex",alignItems:"center",gap:10}}>
//           {user
//             ?<div style={{display:"flex",alignItems:"center",gap:8}}>
//                {user.role!=="owner"&&(
//                  <button className="btn btn-sm btn-outline" onClick={()=>setOrders(true)}>📦 Orders</button>
//                )}
//                <div style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",
//                  background:"var(--light)",borderRadius:50,padding:"6px 14px"}}
//                  onClick={onLogout}>
//                  <div style={{width:28,height:28,borderRadius:"50%",background:"var(--red)",
//                    display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900}}>
//                    {user.name[0].toUpperCase()}
//                  </div>
//                  <span style={{fontSize:13,fontWeight:800,color:"#555"}}>{user.name.split(" ")[0]}</span>
//                </div>
//              </div>
//             :<button className="btn btn-sm btn-outline" onClick={onAuthOpen}>Login / Sign Up</button>
//           }
//           <button className="btn btn-icon" onClick={()=>setCartOpen(true)} style={{position:"relative",fontSize:20}}>
//             🛍️
//             {cartCount>0&&<span style={{position:"absolute",top:-4,right:-4,background:"var(--red)",
//               color:"#fff",borderRadius:"50%",width:18,height:18,fontSize:10,fontWeight:900,
//               display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
//           </button>
//           <button className="hamburger" onClick={()=>setMobileNav(v=>!v)}>{mobileNav?"✕":"☰"}</button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section ref={homeRef} className="hero">
//         <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(255,210,0,.15)",top:-60,right:"38%",pointerEvents:"none"}}/>
//         <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:"rgba(255,59,59,.1)",bottom:40,left:"30%",pointerEvents:"none"}}/>
//         <div className="hero-content">
//           <div className="hero-badge">🎉 Indirapuram's #1 Party Store</div>
//           <h1 className="hero-title">Make Every <span>Celebration</span> Unforgettable!</h1>
//           <p className="hero-sub">Toys · Foil Balloons · Birthday & Anniversary Decoration<br/>Serving <strong>Indirapuram, Ghaziabad</strong> & nearby areas</p>
//           <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
//             <button className="btn btn-primary" onClick={()=>scrollTo(productsRef)}>🛍️ Shop Now</button>
//             <button className="btn btn-outline" onClick={()=>{scrollTo(servicesRef);setTimeout(()=>addToCart&&null,600);}}>🎂 Book Decoration</button>
//           </div>
//           <div style={{display:"flex",gap:10,marginTop:32,flexWrap:"wrap"}}>
//             {["⭐ 500+ Happy Parties","🚚 Same-Day Setup","💳 Pay Online or COD"].map(t=>(
//               <span key={t} style={{background:"#fff",borderRadius:50,padding:"8px 16px",fontSize:12,fontWeight:800,boxShadow:"0 3px 14px rgba(0,0,0,.08)"}}>{t}</span>
//             ))}
//           </div>
//         </div>
//         <img className="hero-img float" style={{"--fd":"4s"}}
//           src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=70&auto=format" alt="Party" fetchpriority="high" decoding="async"/>
//       </section>

//       {/* MARQUEE */}
//       <div className="marquee-wrap">
//         <div className="marquee-inner">
//           {[...Array(2)].map((_,ri)=>(
//             ["🎈 Foil Balloons","🧸 Kids Toys","🎂 Birthday Decoration","💍 Anniversary Décor","👶 Baby Shower","🎊 Confetti","🎁 Gift Sets","🎪 Event Decoration"].map((t,i)=>(
//               <span key={`${ri}-${i}`} className="marquee-item"><span className="marquee-dot"/>{t}</span>
//             ))
//           ))}
//         </div>
//       </div>

//       {/* PRODUCTS */}
//       <section ref={productsRef} className="section">
//         <div style={{maxWidth:1160,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Our Collection</div>
//             <h2 className="section-title">Shop by Category</h2>
//             <p className="section-sub">Quality toys, balloons & decoration supplies</p>
//           </div>
//           <div className="reveal" style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
//             <div className="tab-bar">
//               {[["products","🛍️ Products"],["services","🎪 Decoration"]].map(([t,l])=>(
//                 <button key={t} onClick={()=>setTab(t)} className={`tab-btn${tab===t?" active":""}`}>{l}</button>
//               ))}
//             </div>
//             <div className="search-wrap">
//               <span className="search-icon">🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products…"/>
//             </div>
//           </div>
//           {tab==="products"&&(
//             <div className="cat-tabs reveal">
//               {CATS.map(c=><button key={c} onClick={()=>setCat(c)} className={`cat-tab${cat===c?" active":""}`}>{c}</button>)}
//             </div>
//           )}
//           {loadingData
//             ?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
//                {[1,2,3,4].map(i=><div key={i} style={{borderRadius:20,overflow:"hidden",border:"2px solid #eee"}}>
//                  <div className="skel" style={{height:220}}/><div style={{padding:18}}>
//                  <div className="skel" style={{height:14,width:"60%",marginBottom:8}}/>
//                  <div className="skel" style={{height:20,marginBottom:8}}/>
//                  <div className="skel" style={{height:12,width:"80%"}}/></div></div>)}
//              </div>
//             :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
//                {filtered.map((item,i)=>(
//                  <div key={item._id||item.id} style={{animation:`fadeUp .4s ease ${i*.055}s both`}}>
//                    <PCard item={item} onAdd={addToCart} isService={tab==="services"}/>
//                  </div>
//                ))}
//                {filtered.length===0&&!loadingData&&(
//                  <div style={{gridColumn:"1/-1",textAlign:"center",padding:"60px 0",color:"#bbb"}}>
//                    <div style={{fontSize:56}}>🔍</div>
//                    <p style={{marginTop:12,fontWeight:800,fontSize:18,color:"#999"}}>No results found</p>
//                  </div>
//                )}
//              </div>
//           }
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section ref={servicesRef} style={{background:"var(--light)",padding:"80px 48px"}}>
//         <div style={{maxWidth:1160,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Decoration Services</div>
//             <h2 className="section-title">We Handle Everything 🎉</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:26}}>
//             {services.map((svc,i)=>(
//               <div key={svc._id} className="scard reveal" style={{position:"relative"}}>
//                 {svc.tag&&<div className="pcard-ribbon" style={{background:TAG_COLORS[svc.tag]?.bg||"#FF3B3B",color:"#fff",top:16}}>{svc.tag}</div>}
//                 <div className="scard-img">
//                     <img src={svc.img?.includes("unsplash.com")?svc.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70"):svc.img}
//                       alt={svc.name} loading="lazy" decoding="async"
//                       style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
//                   </div>
//                 <div className="scard-body">
//                   <Chip text={svc.tag}/>
//                   <h3 className="scard-name">{svc.name}</h3>
//                   <p className="scard-desc">{svc.desc}</p>
//                   <div className="scard-foot">
//                     <span className="scard-price">₹{svc.price.toLocaleString()}</span>
//                     <button className="btn btn-yellow btn-sm" onClick={()=>{
//                       if(!user){setCartOpen(false);/* open auth */return;}
//                       addToCart(svc);setCartOpen(true);
//                     }}>Book Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY US */}
//       <section className="section">
//         <div style={{maxWidth:1000,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Why Choose Us</div>
//             <h2 className="section-title">Indirapuram's Most Trusted 💛</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:24}}>
//             {[
//               {icon:"🎨",title:"Custom Themes",desc:"Personalised décor for every occasion.",c:"#FFF0E6",ic:"#FF7A00"},
//               {icon:"⚡",title:"2-Hour Setup",desc:"Full decoration done in under 2 hours.",c:"#E6F4FF",ic:"#1E90FF"},
//               {icon:"💰",title:"Best Prices",desc:"Premium quality at unbeatable prices.",c:"#FFFBE6",ic:"#FFD200"},
//               {icon:"📸",title:"Photo Backdrops",desc:"Instagram-worthy setups every time.",c:"#F0E6FF",ic:"#9B30FF"},
//             ].map(f=>(
//               <div key={f.title} className="why-card reveal">
//                 <div className="why-icon" style={{background:f.c}}>{f.icon}</div>
//                 <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:19,color:"var(--dark)",marginBottom:8}}>{f.title}</h3>
//                 <p style={{fontSize:13.5,color:"#888",lineHeight:1.7}}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section style={{background:"var(--light)",padding:"80px 48px"}}>
//         <div style={{maxWidth:960,margin:"0 auto"}}>
//           <div className="section-header reveal">
//             <div className="section-label">Reviews</div>
//             <h2 className="section-title">Families Love PartyMashup 💬</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:22}}>
//             {[
//               {name:"Priya Sharma",area:"Vaishali",text:"Stunning birthday decoration! My daughter was over the moon.",n:5,color:"#FF3B3B"},
//               {name:"Rohit Gupta",area:"Indirapuram",text:"Great quality foil balloons, super fast delivery. Will order again!",n:5,color:"#1E90FF"},
//               {name:"Neha Singh",area:"Kaushambi",text:"Anniversary decoration in under 2 hours. Truly magical experience!",n:5,color:"#9B30FF"},
//             ].map(t=>(
//               <div key={t.name} className="testi-card reveal">
//                 <Stars n={t.n}/>
//                 <p style={{fontSize:14,color:"#555",lineHeight:1.75,margin:"14px 0 18px",fontWeight:600}}>"{t.text}"</p>
//                 <div style={{display:"flex",alignItems:"center",gap:12}}>
//                   <div style={{width:44,height:44,borderRadius:"50%",background:t.color,
//                     display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#fff",fontSize:18}}>
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <p style={{fontWeight:900,fontSize:14}}>{t.name}</p>
//                     <p style={{fontSize:12,color:"#aaa"}}>📍 {t.area}, Ghaziabad</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="cta-banner reveal">
//         <div>
//           <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:"clamp(26px,4vw,42px)",color:"#fff",marginBottom:8}}>Ready to Make Your Party Amazing?</h2>
//           <p style={{fontSize:15,color:"rgba(255,255,255,.65)",fontWeight:600}}>Order online or WhatsApp us — we'll plan everything 🎊</p>
//         </div>
//         <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
//           <button className="btn btn-yellow" style={{fontSize:15,padding:"14px 32px"}}
//             onClick={()=>window.open("https://wa.me/919876543210","_blank")}>📲 WhatsApp Us</button>
//           {!user&&<button className="btn btn-outline" style={{color:"#fff",borderColor:"rgba(255,255,255,.4)",fontSize:15,padding:"14px 32px"}}
//             onClick={onAuthOpen}>🔑 Login / Sign Up</button>}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer ref={contactRef} className="footer">
//         <div className="footer-grid">
//           <div>
//             <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBkAGQAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAACtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADx8DtRvwSqK+iTcXUfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPgC3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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//EAAL/2gAMAwEAAgADAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDPNGMMONCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBFLDKIABPPOBBAAAAAAAAABHLNAEAAAAAAMFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLGNEAIAIEMEAEAAPGPACAAAABIKIAAAAAAAAAAEFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDFKAAAAAAAAAAAAAAAAAMHDLCAHIIAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLOIIAAAAAAAAAAAAAAAAAAAAEEPGEAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGGIAAAAAAAAAAAAAAAAAAAAAAAAJEOAAAAAAAAAAAAAAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPEAAAAAAAAAAAAAAAAAAAAAAAAAAJANPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEKAAAAAAAAAAAAAAAAAAAAAAAAACDAAAAANCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAPCAAAAAEFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAAAAAAAAAAAAAAAAAAAAAAAAMOAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCAAAAAAAAAAAAAAAAAAAAAAAAAFNIAAAAAAAAPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCAAAAAAAAAAAAAAAADCAAAAAAHBKAAAAAAAAANPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAECAAAAAFGDIAAAAAAAAABBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAABLDCAAAAGCAAAENAAAABKAOAAAAAAAAAAFEKAAAABAAAAACDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJAAAAAAMIAAAAEKAAAAPAAAAGIBIAAAAAAAAAAEACAAABDAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAEDAAABAAAAHCAABGBEAAAAAAAAAAAAABAAABDAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAMAAAABAAAICAAHIGAAAAAAAAAAAAAABAABBNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAABCAABCAANAAAAAMAAAAAAAAAAAAFAFAAAGFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCAAAAAAAAAGDAAEDAAOIAPAACAAAAAAAAAAAAJABAAGIFAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNAAAAAAAAAKMAAAEIBLAECAGAAAAAAAAAAAAAFAKAFAAFAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKAAAAAAAAKAJAAAPEIAGABKAAAAAAAAAAAAACBIBOAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOCAAAAAAAKAEIAABGIEAADAAAAAAAAAAAAALACAEEAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJJAAAAAAAKAANAAALANAACAAAAAAAAAAAAACAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPBAAAAAKAAEIAAANCAFIAAAAAAAAAAAAHACAAKAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMBLCAELDCHLCAEJAAMAAAAAAAAAAAADIHCACAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBCBDAAAAAMEPJDPONEEDAGIAHIDKAAAAAAAAABJHAAHAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCHIONBEMHPDAAAAAAECAAAAAKJAAKAEFICAAAAABPIPAABGIAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOMIAAAAAAEAOCAAAAAAKAAAAECKABIAAEGHHLDHHHCEAAAEEAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGKIAAAAAAAAAAAIAAAAAAKAAAAABIAHNCAAAEEMMIIAAAAABAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHMAAAAAAAAAAAAAAAAAAAAKAAAABCAEJALAAAAAAAAAAAAAAHIAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEGAAAAAAAAAAAAAAAAAAAAAKAAAAAAALLAFKAAAAAAAAAAAABJAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAAAAAAAAAAAAAAAAAAAAKAAAAEABBKAALAAAAAAAAAAAAGEAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAGEJAABCAAAAAAAAAAAJIAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIAAAAAAAAAAAAAAAAAAAAAAAKAAAKAECAIAAAIAAAAAAAAAACGAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAKAAACAKAAEKAAECAAAAAAAABPIAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFIAAAAAAAAAAAAAAAAAAAAAAAAKAAJAECAAANCAAKCAAAAAAAGCAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAKABGBIAAAAADAAEKAAAAAABOAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAKABAGAAAAAABCAABAAAAAADKAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAKAKBMAAAAAAACAAABAAAABJAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAKFBNAAAAAAAAAKAABCAAABKAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAOODAAAAAAAAAAGAAEDAAAAIAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCAAAAAAAAAAAAAAAAAAAAAAAAKPKAAAAAAAAAAFIAAEIAGEAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANIAAAAAAAAAAAAAAAAAAAAAAAALGAAAAAAAAAAAAFAAAPBJIAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHAAAAAAAAAAAAAAAAAAAAAABAOAAAAAAAAAAAAAELAABEMAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAAAAAAABPAKAAAAAAAAAAAAAAMAAAMAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAAAAAAAAAAAAAAAAAAHBAKAAAAAAAAAAAAAAALAAKAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAAAAAAAAAAAAAAAAAAFPAEIAAAAAAAAAAAAAAAMCEIAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAABFBAAFCAAAAAAAAAAAAAAAEHKAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENBAAAAAAAAAAAAACEEAAAHCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECHAAAAAAAAAACOOGAAAAHPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEABDDAAAABGNCAAAAAAGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMNPHMNAMAAAAAAABKECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAJADAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAEKDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEIAAAAAAAAEMEAAAAAAAAAAAAAAAAAAAAAAAAEMAAAAAAAMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNONPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNJANICBCPKOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPONNAEIFHPGEEFPONPPPPPPPPPLINDPPPPPPLIGJNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIDACPDHDLPPLHPHDCOPOPPPPPPPCLPPPPPPPPPPPOCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNEOPHPPPPPPPPPPPPPPPPPPPMPPJCLPPPPPPPPPPPPPPLCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLBBPPPPPPPPPPPPPPPPPPPPPPDDEAHPPPPPPPPPPPPPPPPMIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKCMPPPPPPPPPPPPPPPPPPPPPPPPKIKFPPPPPPPPPPPPPPPPPKLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNNBPPPPPPPPPPPPPPPPPPPPPPPPPMIPMGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLELPPPPPPPPPPPPPPPPPPPPPPPPPIDPPPOBNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGDPPPPLJFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDNPPPPPPPPPPPPPPPPPPPPPPPPPIBNPPPPPPNNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAHPPPPPPPPPPPPPPPPPPPPPPPPOJAPPPPPPPHGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIHPPPPPPPPPPPPPPPPPPPPPPPPOOGNPPPPPPPLENPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPANPPPPPPPPPPPPPPPPMNPPPPPPOOLPPPPPPPPPAMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLEPPPPPPPPPPPPPPPPPJPPPPPPPDNPPPPPPPPPPKPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLIPPPPPKCBDDDDANPPPLFPPPPOBPLPPPPPPPPPPOLFPPPPFDDDDDDBFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLGPPPPPPPKPPPPLNPPPPOHPPPMHLPPPPPPPPPPPKPNPPPPFPPPPJDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOAPPPPPPPPGOPPPOPPPPAPPPODOBPPPPPPPPPPPKPOPPPNFPPPIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPIPPPPOPPPFFPPEHMPPPPPPPPPPPPLPLPPONHPPPBPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPINPPPPPPPPKDNPPONPPAHPPPPBPPPPPPPPPPPPOPKPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCNPPPPPPPPKBEPPLNPPIHPIPPHPPPPPPPPPPPPKPKPKHHPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLAPPPPPPPPKFGNPPPHLAPONPMPPPPPPPPPPPPPAPDPOHPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFMPPPPPPPKFPPPPPJODPLPPFPPPPPPPPPPPPLFOFODPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKJOPPPPPPKFPLFPPOOHLPPJPPPPPPPPPPPPPJPMHPFPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDGOPPPPPKFPPIPPPAPIPPPPPPPPPPPPPPPKFPBPMHPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNFPPPPKFPPPFPPOPFPOHPPPPPPPPPPPPIPPHKGPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHKKGMNLPNPPINPPAPPLPPPPPPPPPPPPPHINOAHPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPONNPPPPHODCLIAGLPOODHPJFBOPPPPPPPPPLGJBPHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPENJDNKCFINPPPPPPLNPPPPGAKPPHPLFFNPPPPPMOGHHPOLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLCBFHPPPPPPKKNPPPPPKFPPPPPEFPPGPPHKFEEIMFAPPPPPKLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMCHPPPPPPPPPPPHPPPPPKFPPPPPKHPJDNPPPPPLHDLPPPPPPNHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHFPPPPPPPPPPPPPPPPPPPKFPPPPONPKCHCPPPPPPPPPPPPPPKOPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPPPPPKFPPPPKPPAIPOPPPPPPPPPPPPPOIPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCDPPPPPPPPPPPPPPPPPPPPPKFPPPPLPPKFPPINPPPPPPPPPPPKPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIIPPPPPPPPPPPPPPPPPPPPPPKFPPPNHPOPMPPONPPPPPPPPPPOPFPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJNPPPPPPPPPPPPPPPPPPPPPPKFPPPNPKNPLPPPHPPPPPPPPPPEMPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDPPPPPPPPPPPPPPPPPPPPPPPKFPPPFPDPPONPPLNPPPPPPPPOGHPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNHPPPPPPPPPPPPPPPPPPPPPPPKFPPAPLHPPPKNPPENPPPPPPPEJPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCHPPPPPPPPPPPPPPPPPPPPPPPKFPODOHPPPPPMPPLNPPPPPPPCNPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBHPPPPPPPPPPPPPPPPPPPPPPPKFPNPPPPPPPPCNPPOPPPPPPIBPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKFPPPJPPPPPPPGPPPOPPPPPDHPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKEIOCPPPPPPPPPFPPONPPPJPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPPPPPPPPPPPPPPPPPPPPPPPPKFJIHPPPPPPPPPCPPLNPPPLHPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPKFADPPPPPPPPPPPFPPPHPIBPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGHPPPPPPPPPPPPPPPPPPPPPPPKENPPPPPPPPPPPPJPPPJPDPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKGPPPPPPPPPPPPPPPPPPPPPPOKFHPPPPPPPPPPPPHGPPOJLPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLOFPPPPPPPPPPPPPPPPPPPPOKKFPPPPPPPPPPPPPPEPPPDHPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNNPPPPPPPPPPPPPPPPPPPMJKFPPPPPPPPPPPPPPLOPPNPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLHGPPPPPPPPPPPPPPPPPPMJPOHPPPPPPPPPPPPPPPDNPFPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDIOPPPPPPPPPPPPPPPPEJPPOFPPPPPPPPPPPPPPPLLEPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCBHPPPPPPPPPPPPPNEFPPPMOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGKMPPPPPPPPPOIIPPPPPIAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJHGEPNPOPMFMLHPPPPPBAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDHKAIDFPDPPPPPPPLFKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPLMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHPPLFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBPPPEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMDPPPPKNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMJHPPPPPPLBMPPPPPPPPPPPPPPPPPPPPPPPPPPPEPPPPLKHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDDHPPPPPPPPLHDOPPPPPPPPPPPPPPPPPPPPPPLLDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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"
//                 alt="logo" style={{width:40,height:40,objectFit:"contain",borderRadius:6,background:"#fff",padding:2}}/>
//               <span style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#fff"}}>Party<span style={{color:"var(--yellow)"}}>Mashup</span></span>
//             </div>
//             <p style={{fontSize:14,color:"rgba(255,255,255,.45)",lineHeight:1.8}}>
//               Indirapuram's favourite toy & party decoration store. Making every celebration magical since 2018.
//             </p>
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">Find Us</p>
//             {["S3, Plot No. 185, Gyan Khand-1","Indirapuram, Ghaziabad – 201014","📞 9999512384 / 9911510687","⏰ Wed–Mon: 10:30 AM – 9:00 PM","🔴 Closed on Tuesdays"].map(l=><p key={l}>{l}</p>)}
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">Areas We Serve</p>
//             {["Indirapuram","Vaishali","Vasundhara","Patparganj","Kaushambi","Rajnagar Ext.","& nearby areas"].map(a=><p key={a}>📌 {a}</p>)}
//           </div>
//           <div className="footer-col">
//             <p className="footer-col-title">We Offer</p>
//             {["Kids Toys","Balloons","Birthday Decoration","Anniversary Decoration","Any Type of Décor","Candle & Cake Toppers","3D Stars, Hearts & Butterflies","Gift Items","Glow Sticks"].map(c=><a key={c} href="#">{c}</a>)}
//           </div>
//         </div>
//         <div style={{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:18,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
//           <p style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>© 2025 PartyMashup, Indirapuram Ghaziabad</p>
//           <button onClick={onOwnerClick} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",
//             color:"rgba(255,255,255,.5)",borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:700,cursor:"pointer"}}>
//             👤 Owner Login
//           </button>
//         </div>
//       </footer>

//       {/* CART FAB */}
//       <button onClick={()=>setCartOpen(true)} style={{position:"fixed",bottom:28,right:28,
//         background:"var(--red)",color:"#fff",border:"none",borderRadius:"50%",width:58,height:58,
//         fontSize:24,cursor:"pointer",zIndex:800,boxShadow:"0 6px 28px rgba(255,59,59,.5)",
//         display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .2s"}}
//         onMouseEnter={e=>e.currentTarget.style.transform="scale(1.12)"}
//         onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
//         🛍️
//         {cartCount>0&&<span style={{position:"absolute",top:-3,right:-3,background:"#1A1A1A",
//           color:"#fff",borderRadius:"50%",width:20,height:20,fontSize:10,fontWeight:900,
//           display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
//       </button>

//       <CartDrawer cart={cart} open={cartOpen} onClose={()=>setCartOpen(false)}
//         onRemove={id=>setCart(p=>p.filter(i=>(i.id||i._id)!==id))}
//         onCheckout={()=>{
//           if(!user){setCartOpen(false);onAuthOpen();return;}
//           setCartOpen(false);setCheckout(true);
//         }}/>

//       {checkout&&<CheckoutModal open={checkout} onClose={()=>setCheckout(false)}
//         cart={cart} user={user} onSuccess={handleOrderSuccess}/>}

//       {orders&&<MyOrders onClose={()=>setOrders(false)}/>}

//       {toast&&(
//         <div className="toast-pop" style={{position:"fixed",bottom:100,left:"50%",transform:"translateX(-50%)",
//           background:"#1A1A1A",color:"#fff",padding:"12px 24px",borderRadius:50,fontSize:13,
//           fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap",maxWidth:"90vw",textAlign:"center"}}>
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    OWNER DASHBOARD
// ═══════════════════════════════════════════════════════════════ */
// function OwnerDashboard({user,onLogout}){
//   const [tab,setTab]=useState("overview");
//   const [products,setProducts]=useState([]);
//   const [services,setServices]=useState([]);
//   const [orders,setOrders]=useState([]);
//   const [stats,setStats]=useState(null);
//   const [loading,setLoading]=useState(true);
//   const [showForm,setShowForm]=useState(false);
//   const [editItem,setEditItem]=useState(null);
//   const [delItem,setDelItem]=useState(null);
//   const [itemTab,setItemTab]=useState("products");
//   const [toast,setToast]=useState("");
//   const [fd,setFd]=useState({name:"",category:"Toys",price:"",img:"",desc:"",tag:""});
//   const showT=msg=>{setToast(msg);setTimeout(()=>setToast(""),2600);};

//   useEffect(()=>{
//     Promise.all([API.getAdminStats(),API.getProducts(),API.getServices(),API.getAdminOrders()])
//       .then(([s,p,sv,o])=>{setStats(s);setProducts(p);setServices(sv);setOrders(o.orders||[]);})
//       .catch(()=>{})
//       .finally(()=>setLoading(false));
//   },[]);

//   const data=itemTab==="products"?products:services;
//   const setData=itemTab==="products"?setProducts:setServices;

//   const openAdd=()=>{setEditItem(null);setFd({name:"",category:"Toys",price:"",img:"",desc:"",tag:"",stock:99,customCat:""});setShowForm(true);};
//   const openEdit=item=>{setEditItem(item);setFd({name:item.name,category:item.category||"",price:item.price,img:item.img,desc:item.desc,tag:item.tag||"",stock:item.stock??99,customCat:""});setShowForm(true);};

//   const save=async()=>{
//     if(!fd.name||!fd.price)return;
//     const finalCat=fd.customCat&&fd.customCat.trim()?fd.customCat.trim():fd.category;
//     const payload={name:fd.name,category:finalCat,price:Number(fd.price),img:fd.img,desc:fd.desc,tag:fd.tag,stock:Number(fd.stock??99)};
//     try{
//       if(editItem){
//         const updated=itemTab==="products"
//           ?await API.updateProduct(editItem._id,payload)
//           :await API.updateService(editItem._id,payload);
//         setData(p=>p.map(x=>x._id===editItem._id?updated:x));
//         showT("✅ Updated!");
//       }else{
//         const created=itemTab==="products"
//           ?await API.createProduct(payload)
//           :await API.createService(payload);
//         setData(p=>[created,...p]);
//         showT("✅ Added!");
//       }
//       setShowForm(false);
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const del=async item=>{
//     try{
//       itemTab==="products"?await API.deleteProduct(item._id):await API.deleteService(item._id);
//       setData(p=>p.filter(x=>x._id!==item._id));
//       setDelItem(null);showT("🗑️ Deleted.");
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const updateStatus=async(id,status)=>{
//     try{
//       const updated=await API.updateOrderStatus(id,status);
//       setOrders(p=>p.map(o=>o._id===id?updated:o));
//       showT("✅ Status updated!");
//     }catch(e){showT("❌ "+e.message);}
//   };

//   const statCards=[
//     {label:"Total Orders",value:stats?.totalOrders??0,color:"#FF3B3B",icon:"📦"},
//     {label:"Revenue",value:`₹${(stats?.revenue??0).toLocaleString()}`,color:"#00C853",icon:"💰"},
//     {label:"Products",value:stats?.totalProducts??products.length,color:"#1E90FF",icon:"🧸"},
//     {label:"Customers",value:stats?.totalCustomers??0,color:"#9B30FF",icon:"👥"},
//   ];

//   return(
//     <div className="dash">
//       <div className="dash-top">
//         <div style={{display:"flex",alignItems:"center",gap:10}}>
//           <div style={{width:34,height:34,background:"#FF3B3B",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎈</div>
//           <div>
//             <p style={{fontFamily:"'Lilita One',cursive",fontSize:17}}>PartyMashup</p>
//             <p style={{fontSize:10,color:"#aaa"}}>Owner Dashboard · {user?.email}</p>
//           </div>
//         </div>
//         <div style={{display:"flex",gap:8,alignItems:"center"}}>
//           <div className="tab-bar" style={{display:"flex"}}>
//             {[["overview","📊 Overview"],["items","🛍️ Products"],["orders","📦 Orders"]].map(([t,l])=>(
//               <button key={t} className={`tab-btn${tab===t?" active":""}`} onClick={()=>setTab(t)}>{l}</button>
//             ))}
//           </div>
//           <button className="btn btn-outline btn-sm" onClick={onLogout}>🚪 Logout</button>
//         </div>
//       </div>

//       <div className="dash-body">
//         {loading&&<div style={{display:"flex",justifyContent:"center",padding:60}}><Spinner/></div>}

//         {/* OVERVIEW */}
//         {!loading&&tab==="overview"&&(
//           <>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:16,marginBottom:32}}>
//               {statCards.map(s=>(
//                 <div key={s.label} className="stat-card" style={{borderTop:`3px solid ${s.color}`}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//                     <span style={{fontSize:32}}>{s.icon}</span>
//                     <span className="stat-val" style={{color:s.color}}>{s.value}</span>
//                   </div>
//                   <p className="stat-label">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//             <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:20,marginBottom:16}}>Recent Orders</h3>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Order ID","Customer","Total","Status","Date"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {(stats?.recentOrders||orders).slice(0,5).map(o=>(
//                     <tr key={o._id}>
//                       <td style={{fontWeight:800}}>#{o.orderId}</td>
//                       <td>{o.customerName||o.customer?.name}</td>
//                       <td style={{fontFamily:"'Lilita One',cursive",color:"var(--red)"}}>₹{o.total?.toLocaleString()}</td>
//                       <td><StatusBadge status={o.status}/></td>
//                       <td style={{color:"#aaa",fontSize:12}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}

//         {/* PRODUCTS / SERVICES */}
//         {!loading&&tab==="items"&&(
//           <>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
//               <div className="tab-bar">
//                 {[["products","🛍️ Products"],["services","🎪 Services"]].map(([t,l])=>(
//                   <button key={t} className={`tab-btn${itemTab===t?" active":""}`} onClick={()=>setItemTab(t)}>{l}</button>
//                 ))}
//               </div>
//               <button className="btn btn-primary" onClick={openAdd}>＋ Add {itemTab==="products"?"Product":"Service"}</button>
//             </div>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Item","Category","Price","Tag","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {data.map(item=>(
//                     <tr key={item._id}>
//                       <td>
//                         <div style={{display:"flex",alignItems:"center",gap:12}}>
//                           <img src={item.img||"https://placehold.co/52"} alt={item.name}
//                             style={{width:52,height:52,objectFit:"cover",borderRadius:10,border:"2px solid #eee"}}/>
//                           <div>
//                             <p style={{fontWeight:800,fontSize:14}}>{item.name}</p>
//                             <p style={{fontSize:12,color:"#aaa",maxWidth:220}}>{item.desc?.slice(0,55)}…</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td style={{fontSize:13,color:"#888",fontWeight:700}}>{item.category||"—"}</td>
//                       <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:18,color:"var(--red)"}}>₹{item.price?.toLocaleString()}</span></td>
//                       <td><Chip text={item.tag}/></td>
//                       <td>
//                         <div style={{display:"flex",gap:8}}>
//                           <button onClick={()=>openEdit(item)} style={{background:"#EEF2FF",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#4F46E5"}}>✏️ Edit</button>
//                           <button onClick={()=>setDelItem(item)} style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",color:"#DC2626"}}>🗑️ Del</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {data.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No items yet.</p></div>}
//             </div>
//           </>
//         )}

//         {/* ORDERS */}
//         {!loading&&tab==="orders"&&(
//           <>
//             <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,marginBottom:20}}>All Orders</h3>
//             <div className="dash-table">
//               <table>
//                 <thead><tr>{["Order","Customer","Address","Items","Total","Payment","Status","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
//                 <tbody>
//                   {orders.map(o=>(
//                     <tr key={o._id}>
//                       <td>
//                         <p style={{fontWeight:800}}>#{o.orderId}</p>
//                         <p style={{fontSize:11,color:"#aaa"}}>{new Date(o.createdAt).toLocaleDateString("en-IN")}</p>
//                       </td>
//                       <td>
//                         <p style={{fontWeight:700,fontSize:13}}>{o.customerName||o.customer?.name}</p>
//                         <p style={{fontSize:11,color:"#aaa"}}>{o.customerPhone||o.customer?.phone}</p>
//                       </td>
//                       <td style={{fontSize:12,color:"#555",maxWidth:180}}>
//                         <p style={{fontWeight:600}}>{o.address||"—"}</p>
//                         {o.eventDate&&<p style={{color:"#aaa",fontSize:11}}>📅 {o.eventDate}</p>}
//                         {o.note&&<p style={{color:"#aaa",fontSize:11,fontStyle:"italic"}}>"{o.note}"</p>}
//                       </td>
//                       <td style={{fontSize:12,color:"#888"}}>{o.items?.length} item{o.items?.length!==1?"s":""}</td>
//                       <td><span style={{fontFamily:"'Lilita One',cursive",fontSize:16,color:"var(--red)"}}>₹{o.total?.toLocaleString()}</span></td>
//                       <td>
//                         <span style={{fontSize:11,fontWeight:700,color:o.paymentStatus==="paid"?"var(--green)":"#FF7A00"}}>
//                           {o.paymentMethod==="cod"?"COD":"Online"} · {o.paymentStatus}
//                         </span>
//                       </td>
//                       <td><StatusBadge status={o.status}/></td>
//                       <td>
//                         <select value={o.status} onChange={e=>updateStatus(o._id,e.target.value)}
//                           style={{padding:"6px 10px",borderRadius:8,border:"2px solid #eee",fontSize:12,
//                             fontFamily:"'Nunito',sans-serif",cursor:"pointer",fontWeight:700}}>
//                           {["placed","confirmed","preparing","out_for_delivery","delivered","cancelled"].map(s=>(
//                             <option key={s} value={s}>{STATUS_LABELS[s]}</option>
//                           ))}
//                         </select>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {orders.length===0&&<div style={{textAlign:"center",padding:48,color:"#bbb"}}><div style={{fontSize:48}}>📦</div><p style={{marginTop:12,fontWeight:800}}>No orders yet.</p></div>}
//             </div>
//           </>
//         )}
//       </div>

//       {/* ADD/EDIT MODAL */}
//       <Modal open={showForm} onClose={()=>setShowForm(false)} title={editItem?"✏️ Edit Item":"➕ Add Item"}>
//         <Field label="Name *"       value={fd.name}     onChange={v=>setFd(f=>({...f,name:v}))}     placeholder="e.g. Unicorn Balloon" required/>
//         {itemTab==="products"&&<Field label="Category" value={fd.category} onChange={v=>setFd(f=>({...f,category:v}))} as="select" options={["Toys","Balloons","Decoration"]}/>}
//         <Field label="Price (₹) *" value={fd.price}    onChange={v=>setFd(f=>({...f,price:v}))}    type="number" placeholder="299" required/>
//         <ImageUploader value={fd.img||""} onChange={v=>setFd(f=>({...f,img:v}))}/>
//         <Field label="Description"  value={fd.desc}     onChange={v=>setFd(f=>({...f,desc:v}))}     as="textarea" placeholder="Short description…"/>
//         <Field label="Badge Tag"    value={fd.tag}      onChange={v=>setFd(f=>({...f,tag:v}))}      placeholder="Bestseller / New / Popular / Trending"/>
//         <div style={{display:"flex",gap:12,marginBottom:16}}>
//           <div style={{flex:1}}>
//             <label style={{display:"block",fontSize:13,fontWeight:800,color:"#555",marginBottom:6}}>Stock Quantity *</label>
//             <input type="number" value={fd.stock??99} onChange={e=>setFd(f=>({...f,stock:e.target.value}))}
//               placeholder="99" min="0"
//               style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #EBEBEB",fontSize:14,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
//           </div>
//           <div style={{flex:1}}>
//             <label style={{display:"block",fontSize:13,fontWeight:800,color:"#555",marginBottom:6}}>Custom Category</label>
//             <input type="text" value={fd.customCat||""} onChange={e=>setFd(f=>({...f,customCat:e.target.value}))}
//               placeholder="e.g. Candles"
//               style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #EBEBEB",fontSize:14,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
//           </div>
//         </div>
//         <div style={{display:"flex",gap:10,marginTop:8}}>
//           <button className="btn btn-outline" style={{flex:1}} onClick={()=>setShowForm(false)}>Cancel</button>
//           <button className="btn btn-primary" style={{flex:2,borderRadius:12}} onClick={save}>
//             {editItem?"💾 Save Changes":"➕ Add Item"}
//           </button>
//         </div>
//       </Modal>

//       {/* DELETE CONFIRM */}
//       <Modal open={!!delItem} onClose={()=>setDelItem(null)} title="🗑️ Confirm Delete">
//         <div style={{textAlign:"center",padding:"8px 0 20px"}}>
//           {delItem?.img&&<img src={delItem.img} alt="" style={{width:80,height:80,objectFit:"cover",borderRadius:14,margin:"0 auto 14px",display:"block",border:"2px solid #eee"}}/>}
//           <p style={{fontWeight:800,fontSize:16}}>{delItem?.name}</p>
//           <p style={{color:"#aaa",marginTop:6,fontSize:14}}>This action cannot be undone.</p>
//         </div>
//         <div style={{display:"flex",gap:10}}>
//           <button className="btn btn-outline" style={{flex:1}} onClick={()=>setDelItem(null)}>Cancel</button>
//           <button className="btn" style={{flex:1,background:"#DC2626",color:"#fff",borderRadius:50,padding:"11px 0",fontWeight:900,cursor:"pointer",border:"none"}} onClick={()=>del(delItem)}>Yes, Delete</button>
//         </div>
//       </Modal>

//       {toast&&<div className="toast-pop" style={{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",
//         background:"#1A1A1A",color:"#fff",padding:"12px 28px",borderRadius:50,fontSize:13,
//         fontWeight:800,zIndex:2000,boxShadow:"0 6px 24px rgba(0,0,0,.2)",whiteSpace:"nowrap"}}>
//         {toast}
//       </div>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    ROOT
// ═══════════════════════════════════════════════════════════════ */
// export default function App(){
//   const [view,setView]=useState("store");
//   const [user,setUser]=useState(()=>{
//     try{const u=localStorage.getItem("pm_user");return u?JSON.parse(u):null;}catch{return null;}
//   });
//   const [authOpen,setAuthOpen]=useState(false);

//   // Verify token on load
//   useEffect(()=>{
//     if(localStorage.getItem("pm_token")){
//       API.getMe().then(d=>{
//         setUser(d.user);
//         localStorage.setItem("pm_user",JSON.stringify(d.user));
//       }).catch(()=>{
//         localStorage.removeItem("pm_token");
//         localStorage.removeItem("pm_user");
//         setUser(null);
//       });
//     }
//   },[]);

//   useEffect(()=>{
//     document.title="PartyMashup – Kids Toys, Foil Balloons & Party Decoration in Indirapuram Ghaziabad";
//     [["description","Best kids toys, foil balloons & birthday decoration in Indirapuram Ghaziabad."],
//      ["keywords","party decoration Indirapuram, kids toys Indirapuram Ghaziabad, foil balloons, birthday decoration, PartyMashup"],
//      ["robots","index, follow"],["geo.region","IN-UP"],["geo.placename","Indirapuram, Ghaziabad"]].forEach(([n,c])=>{
//       let el=document.querySelector(`meta[name='${n}']`);
//       if(!el){el=document.createElement("meta");el.name=n;document.head.appendChild(el);}
//       el.content=c;
//     });
//   },[]);

//   const handleAuth=u=>{
//     setUser(u);
//     localStorage.setItem("pm_user",JSON.stringify(u));
//     if(u.role==="owner")setView("owner");
//   };

//   const handleLogout=()=>{
//     localStorage.removeItem("pm_token");
//     localStorage.removeItem("pm_user");
//     setUser(null);
//     setView("store");
//   };

//   return(
//     <>
//       <style>{CSS}</style>
//       {view==="store"&&(
//         <CustomerPortal user={user} onAuthOpen={()=>setAuthOpen(true)}
//           onLogout={handleLogout} onOwnerClick={()=>{
//             if(user?.role==="owner")setView("owner");
//             else setAuthOpen(true);
//           }}/>
//       )}
//       {view==="owner"&&user?.role==="owner"&&(
//         <OwnerDashboard user={user} onLogout={handleLogout}/>
//       )}
//       <AuthModal open={authOpen} onClose={()=>setAuthOpen(false)} onAuth={handleAuth}/>
//     </>
//   );
// }
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
/* ── NEW PRODUCT CARD (screenshot style) ── */
.ncard{background:#fff;border-radius:16px;overflow:hidden;border:1.5px solid #eee;
  display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s;}
.ncard:hover{box-shadow:0 8px 32px rgba(0,0,0,.1);transform:translateY(-3px);}
.ncard-img{height:200px;overflow:hidden;background:#f8f8f8;position:relative;flex-shrink:0;}
.ncard-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s;}
.ncard:hover .ncard-img img{transform:scale(1.05);}
.ncard-off{position:absolute;top:10px;left:10px;background:#FF3B3B;color:#fff;
  font-size:11px;font-weight:900;padding:4px 8px;border-radius:6px;line-height:1.2;text-align:center;}
.ncard-body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:5px;flex:1;}
.ncard-name{font-weight:800;font-size:14px;color:#1A1A1A;line-height:1.3;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.ncard-price-row{display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;}
.ncard-price{font-family:"Lilita One",cursive;font-size:18px;color:#1A1A1A;}
.ncard-mrp{font-size:12px;color:#999;text-decoration:line-through;}
.ncard-save{font-size:12px;color:#00C853;font-weight:800;}
.ncard-stock{font-size:12px;font-weight:700;}
.ncard-qty{display:flex;align-items:center;gap:0;border:1.5px solid #ddd;
  border-radius:8px;overflow:hidden;margin-top:6px;}
.ncard-qbtn{background:#fff;border:none;width:36px;height:34px;font-size:18px;
  cursor:pointer;font-weight:900;color:#FF3B3B;transition:background .15s;line-height:1;
  display:flex;align-items:center;justify-content:center;}
.ncard-qbtn:hover{background:#fff5f5;}
.ncard-qval{flex:1;text-align:center;font-weight:800;font-size:15px;color:#1A1A1A;
  border-left:1.5px solid #ddd;border-right:1.5px solid #ddd;height:34px;
  display:flex;align-items:center;justify-content:center;}
.ncard-add{width:100%;background:#FF3B3B;color:#fff;border:none;border-radius:8px;
  padding:9px;font-size:13px;font-weight:900;cursor:pointer;margin-top:8px;
  font-family:"Nunito",sans-serif;transition:background .2s;}
.ncard-add:hover{background:#e52e2e;}
.ncard-add.added{background:#00C853;}
.ncard-add:disabled{background:#ccc;cursor:not-allowed;}

/* ── CATEGORY ROW ── */
.cat-row{margin-bottom:44px;}
.cat-row-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.cat-row-title{font-family:"Lilita One",cursive;font-size:22px;color:#1A1A1A;}
.cat-row-see{color:#FF3B3B;font-weight:800;font-size:14px;cursor:pointer;background:none;
  border:none;text-decoration:none;}
.cat-row-see:hover{text-decoration:underline;}
.cat-row-scroll{display:flex;gap:16px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none;}
.cat-row-scroll::-webkit-scrollbar{display:none;}
.cat-row-scroll .ncard{min-width:200px;max-width:200px;flex-shrink:0;}

/* full grid when See All */
.cat-full-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}

.pcard-img img{width:100%;height:100%;object-fit:cover;display:block;}
.qty-btn{width:32px;height:32px;border-radius:50%;border:2px solid var(--border);
  background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;
  justify-content:center;font-weight:900;transition:all .2s;line-height:1;}
.qty-btn:hover{background:var(--dark);color:#fff;border-color:var(--dark);}
.qty-val{font-family:"Lilita One",cursive;font-size:18px;min-width:28px;text-align:center;}
.in-stock{background:#D4EDDA;color:#155724;padding:3px 10px;border-radius:50px;
  font-size:11px;font-weight:900;display:inline-block;}
.out-stock{background:#F8D7DA;color:#721C24;padding:3px 10px;border-radius:50px;
  font-size:11px;font-weight:900;display:inline-block;}
.product-popup-img{width:100%;height:280px;object-fit:cover;border-radius:16px;
  margin-bottom:20px;display:block;}
@keyframes popupIn{from{opacity:0;transform:scale(.94) translateY(20px);}to{opacity:1;transform:scale(1) translateY(0);}}
.product-popup{animation:popupIn .3s ease both;}

`;

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════ */
const CATS = ["All","Toys","Balloons","Decoration","Candles & Cake Toppers","3D Decor","Gifts","Glow Sticks"];
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
   PRODUCT DETAIL POPUP
═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   PRODUCT DETAIL POPUP  — opens on card click
═══════════════════════════════════════════════════════════════ */
function ProductPopup({item,onClose,onAdd}){
  const [qty,setQty]=useState(1);
  const stock=item.stock??99;
  const inStock=stock>0;
  const mrp=item.mrp||Math.round(item.price*1.2);
  const disc=mrp>item.price?Math.round((mrp-item.price)/mrp*100):0;
  const save=mrp-item.price;
  const imgSrc=item.img?.includes("unsplash.com")
    ?item.img.replace(/w=\d+/,"w=700").replace(/q=\d+/,"q=80")
    :item.img;

  // prevent body scroll when popup open
  useEffect(()=>{
    document.body.style.overflow="hidden";
    return()=>{document.body.style.overflow="";};
  },[]);

  const handle=()=>{
    for(let i=0;i<qty;i++) onAdd(item);
    onClose();
  };

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.65)",zIndex:2000,
      display:"flex",alignItems:"center",justifyContent:"center",padding:16,
      backdropFilter:"blur(6px)"}} onClick={onClose}>
      <div style={{background:"#fff",borderRadius:24,maxWidth:520,width:"100%",
        maxHeight:"92vh",overflowY:"auto",animation:"modalIn .3s ease both",
        boxShadow:"0 24px 80px rgba(0,0,0,.25)"}} onClick={e=>e.stopPropagation()}>

        {/* Image */}
        <div style={{position:"relative"}}>
          <img src={imgSrc} alt={item.name}
            style={{width:"100%",height:260,objectFit:"cover",display:"block",borderRadius:"24px 24px 0 0"}}/>
          <button onClick={onClose} style={{position:"absolute",top:12,right:12,
            background:"rgba(0,0,0,.55)",border:"none",borderRadius:"50%",width:36,height:36,
            color:"#fff",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
            fontWeight:900,lineHeight:1}}>✕</button>
          {disc>0&&(
            <div style={{position:"absolute",top:12,left:12,background:"#FF3B3B",color:"#fff",
              borderRadius:8,padding:"4px 8px",textAlign:"center",lineHeight:1.2}}>
              <div style={{fontSize:14,fontWeight:900}}>{disc}%</div>
              <div style={{fontSize:10,fontWeight:800}}>OFF</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{padding:"20px 24px 28px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:8}}>
            <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#1A1A1A",lineHeight:1.2}}>{item.name}</h2>
            <span style={{background:"#eee",color:"#555",fontSize:11,fontWeight:800,
              padding:"3px 10px",borderRadius:50,whiteSpace:"nowrap",flexShrink:0}}>{item.category}</span>
          </div>

          {/* Price */}
          <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:4}}>
            <span style={{fontFamily:"'Lilita One',cursive",fontSize:28,color:"#1A1A1A"}}>
              ₹{item.price.toLocaleString()}
            </span>
            {disc>0&&<span style={{fontSize:14,color:"#999",textDecoration:"line-through"}}>
              MRP: ₹{mrp.toLocaleString()}
            </span>}
          </div>
          {disc>0&&<p style={{color:"#00C853",fontWeight:800,fontSize:14,marginBottom:8}}>
            Save ₹{save.toLocaleString()}
          </p>}

          {/* Stock */}
          <p style={{fontSize:13,fontWeight:800,color:inStock?"#00C853":"#DC2626",marginBottom:10}}>
            {inStock?`✓ In Stock (${stock} available)`:"✗ Out of Stock"}
          </p>

          {/* Description */}
          {item.desc&&<p style={{fontSize:14,color:"#666",lineHeight:1.7,marginBottom:18,
            padding:"12px 14px",background:"#f8f8f8",borderRadius:12}}>{item.desc}</p>}

          {/* Qty */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <span style={{fontWeight:800,fontSize:14,color:"#555"}}>Quantity</span>
            <div style={{display:"flex",alignItems:"center",border:"2px solid #ddd",borderRadius:10,overflow:"hidden"}}>
              <button onClick={()=>setQty(q=>Math.max(1,q-1))}
                style={{width:40,height:38,background:"#fff",border:"none",fontSize:20,
                  cursor:"pointer",color:"#FF3B3B",fontWeight:900,lineHeight:1}}>−</button>
              <span style={{width:44,textAlign:"center",fontWeight:900,fontSize:17,
                borderLeft:"2px solid #ddd",borderRight:"2px solid #ddd",height:38,
                display:"flex",alignItems:"center",justifyContent:"center"}}>{qty}</span>
              <button onClick={()=>setQty(q=>Math.min(stock,q+1))}
                style={{width:40,height:38,background:"#fff",border:"none",fontSize:20,
                  cursor:"pointer",color:"#FF3B3B",fontWeight:900,lineHeight:1}}>+</button>
            </div>
            <span style={{fontWeight:800,fontSize:14,color:"#1A1A1A"}}>
              Total: ₹{(item.price*qty).toLocaleString()}
            </span>
          </div>

          <button onClick={handle} disabled={!inStock}
            style={{width:"100%",background:inStock?"#FF3B3B":"#ccc",color:"#fff",
              border:"none",borderRadius:14,padding:"14px",fontSize:16,fontWeight:900,
              cursor:inStock?"pointer":"not-allowed",fontFamily:"'Nunito',sans-serif"}}>
            {inStock?"🛒 Add to Cart":"😔 Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD  — screenshot style, click opens popup
═══════════════════════════════════════════════════════════════ */
function NCard({item,onAdd,isService}){
  const [qty,setQty]=useState(0);
  const [loaded,setLoaded]=useState(false);
  const [added,setAdded]=useState(false);
  const [popup,setPopup]=useState(false);
  const stock=item.stock??99;
  const inStock=stock>0;
  const mrp=item.mrp||Math.round(item.price*1.2);
  const disc=mrp>item.price?Math.round((mrp-item.price)/mrp*100):0;
  const save=mrp-item.price;
  const imgSrc=item.img?.includes("unsplash.com")
    ?item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
    :item.img;

  const handleAdd=e=>{
    e.stopPropagation();
    if(!inStock)return;
    setQty(1); onAdd(item);
    setAdded(true); setTimeout(()=>setAdded(false),1400);
  };
  const inc=e=>{e.stopPropagation();if(qty>=stock)return;setQty(q=>q+1);onAdd(item);};
  const dec=e=>{e.stopPropagation();if(qty<=1){setQty(0);}else setQty(q=>q-1);};

  return(
    <>
    <div className="ncard" onClick={()=>!isService&&setPopup(true)}
      style={{cursor:isService?"default":"pointer"}}>
      <div className="ncard-img">
        {!loaded&&<div className="skel" style={{position:"absolute",inset:0,zIndex:1}}/>}
        {disc>0&&(
          <div className="ncard-off">
            <span style={{fontSize:14,fontWeight:900}}>{disc}%</span><br/>OFF
          </div>
        )}
        <img src={imgSrc} alt={item.name} loading="lazy" decoding="async"
          style={{opacity:loaded?1:0,transition:"opacity .35s",position:"relative",zIndex:0}}
          onLoad={()=>setLoaded(true)} onError={()=>setLoaded(true)}/>
        {!inStock&&(
          <div style={{position:"absolute",inset:0,background:"rgba(255,255,255,.75)",
            display:"flex",alignItems:"center",justifyContent:"center",zIndex:3}}>
            <span style={{background:"#F8D7DA",color:"#721C24",padding:"6px 16px",
              borderRadius:50,fontSize:12,fontWeight:900}}>Out of Stock</span>
          </div>
        )}
      </div>

      <div className="ncard-body">
        <p className="ncard-name" title={item.name}>{item.name}</p>
        <div className="ncard-price-row">
          <span className="ncard-price">₹{item.price.toLocaleString()}</span>
          {disc>0&&<span className="ncard-mrp">MRP: ₹{mrp.toLocaleString()}</span>}
        </div>
        {disc>0&&<p className="ncard-save">Save ₹{save.toLocaleString()}</p>}
        <p className="ncard-stock" style={{color:inStock?"#00C853":"#DC2626"}}>
          {inStock?`In Stock : ${stock}`:"Out of Stock"}
        </p>

        {isService
          ?<button className="ncard-add" onClick={e=>{e.stopPropagation();onAdd(item);}}>Book Now</button>
          :qty===0
          ?<button className={`ncard-add${added?" added":""}`} onClick={handleAdd} disabled={!inStock}>
             {added?"✓ Added!":!inStock?"Out of Stock":"Add to Cart"}
           </button>
          :<div className="ncard-qty" onClick={e=>e.stopPropagation()}>
             <button className="ncard-qbtn" onClick={dec}>−</button>
             <span className="ncard-qval">{qty}</span>
             <button className="ncard-qbtn" onClick={inc}>+</button>
           </div>
        }
      </div>
    </div>
    {popup&&<ProductPopup item={item} onClose={()=>setPopup(false)} onAdd={onAdd}/>}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CATEGORY ROW  — horizontal scroll with "See All"
═══════════════════════════════════════════════════════════════ */
function CategoryRow({cat,items,onAdd,onSeeAll}){
  return(
    <div className="cat-row">
      <div className="cat-row-head">
        <span className="cat-row-title">{cat}</span>
        <button className="cat-row-see" onClick={onSeeAll}>See All</button>
      </div>
      <div className="cat-row-scroll">
        {items.slice(0,10).map(item=>(
          <NCard key={item._id||item.id} item={item} onAdd={onAdd}/>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LEGACY PCard alias (used by services section)
═══════════════════════════════════════════════════════════════ */
function PCard({item,onAdd,isService}){
  return <NCard item={item} onAdd={onAdd} isService={isService}/>;
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
  const [expandedCat,setExpandedCat]=useState(null);

  const homeRef=useRef(),productsRef=useRef(),servicesRef=useRef(),contactRef=useRef();

  // Load products & services from backend
  useEffect(()=>{
    setLoadingData(true);
    Promise.all([API.getProducts(),API.getServices()])
      .then(([p,s])=>{
        setProducts(p);
        setServices(s);
        // Preload first 4 product images for instant display
        p.slice(0,4).forEach(item=>{
          if(item.img){
            const link=document.createElement("link");
            link.rel="preload";
            link.as="image";
            link.href=item.img?.includes("unsplash.com")
              ? item.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70")
              : item.img;
            document.head.appendChild(link);
          }
        });
      })
      .catch(()=>{})
      .finally(()=>setLoadingData(false));
  },[]);

  const filtered=products.filter(p=>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

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
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBkAGQAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAACtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADx8DtRvwSqK+iTcXUfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPgC3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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//EAAL/2gAMAwEAAgADAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDPNGMMONCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBFLDKIABPPOBBAAAAAAAAABHLNAEAAAAAAMFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLGNEAIAIEMEAEAAPGPACAAAABIKIAAAAAAAAAAEFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDFKAAAAAAAAAAAAAAAAAMHDLCAHIIAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLOIIAAAAAAAAAAAAAAAAAAAAEEPGEAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGGIAAAAAAAAAAAAAAAAAAAAAAAAJEOAAAAAAAAAAAAAAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPEAAAAAAAAAAAAAAAAAAAAAAAAAAJANPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEKAAAAAAAAAAAAAAAAAAAAAAAAACDAAAAANCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAPCAAAAAEFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAAAAAAAAAAAAAAAAAAAAAAAAMOAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCAAAAAAAAAAAAAAAAAAAAAAAAAFNIAAAAAAAAPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCAAAAAAAAAAAAAAAADCAAAAAAHBKAAAAAAAAANPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAECAAAAAFGDIAAAAAAAAABBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAABLDCAAAAGCAAAENAAAABKAOAAAAAAAAAAFEKAAAABAAAAACDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJAAAAAAMIAAAAEKAAAAPAAAAGIBIAAAAAAAAAAEACAAABDAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAEDAAABAAAAHCAABGBEAAAAAAAAAAAAABAAABDAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAMAAAABAAAICAAHIGAAAAAAAAAAAAAABAABBNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAABCAABCAANAAAAAMAAAAAAAAAAAAFAFAAAGFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCAAAAAAAAAGDAAEDAAOIAPAACAAAAAAAAAAAAJABAAGIFAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNAAAAAAAAAKMAAAEIBLAECAGAAAAAAAAAAAAAFAKAFAAFAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKAAAAAAAAKAJAAAPEIAGABKAAAAAAAAAAAAACBIBOAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOCAAAAAAAKAEIAABGIEAADAAAAAAAAAAAAALACAEEAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJJAAAAAAAKAANAAALANAACAAAAAAAAAAAAACAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPBAAAAAKAAEIAAANCAFIAAAAAAAAAAAAHACAAKAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMBLCAELDCHLCAEJAAMAAAAAAAAAAAADIHCACAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBCBDAAAAAMEPJDPONEEDAGIAHIDKAAAAAAAAABJHAAHAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCHIONBEMHPDAAAAAAECAAAAAKJAAKAEFICAAAAABPIPAABGIAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOMIAAAAAAEAOCAAAAAAKAAAAECKABIAAEGHHLDHHHCEAAAEEAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGKIAAAAAAAAAAAIAAAAAAKAAAAABIAHNCAAAEEMMIIAAAAABAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHMAAAAAAAAAAAAAAAAAAAAKAAAABCAEJALAAAAAAAAAAAAAAHIAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEGAAAAAAAAAAAAAAAAAAAAAKAAAAAAALLAFKAAAAAAAAAAAABJAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAAAAAAAAAAAAAAAAAAAAKAAAAEABBKAALAAAAAAAAAAAAGEAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAGEJAABCAAAAAAAAAAAJIAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIAAAAAAAAAAAAAAAAAAAAAAAKAAAKAECAIAAAIAAAAAAAAAACGAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAKAAACAKAAEKAAECAAAAAAAABPIAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFIAAAAAAAAAAAAAAAAAAAAAAAAKAAJAECAAANCAAKCAAAAAAAGCAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAKABGBIAAAAADAAEKAAAAAABOAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAKABAGAAAAAABCAABAAAAAADKAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAKAKBMAAAAAAACAAABAAAABJAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAKFBNAAAAAAAAAKAABCAAABKAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAOODAAAAAAAAAAGAAEDAAAAIAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCAAAAAAAAAAAAAAAAAAAAAAAAKPKAAAAAAAAAAFIAAEIAGEAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANIAAAAAAAAAAAAAAAAAAAAAAAALGAAAAAAAAAAAAFAAAPBJIAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHAAAAAAAAAAAAAAAAAAAAAABAOAAAAAAAAAAAAAELAABEMAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAAAAAAABPAKAAAAAAAAAAAAAAMAAAMAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAAAAAAAAAAAAAAAAAAHBAKAAAAAAAAAAAAAAALAAKAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAAAAAAAAAAAAAAAAAAFPAEIAAAAAAAAAAAAAAAMCEIAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAABFBAAFCAAAAAAAAAAAAAAAEHKAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENBAAAAAAAAAAAAACEEAAAHCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECHAAAAAAAAAACOOGAAAAHPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEABDDAAAABGNCAAAAAAGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMNPHMNAMAAAAAAABKECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAJADAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAEKDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEIAAAAAAAAEMEAAAAAAAAAAAAAAAAAAAAAAAAEMAAAAAAAMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNONPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNJANICBCPKOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPONNAEIFHPGEEFPONPPPPPPPPPLINDPPPPPPLIGJNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIDACPDHDLPPLHPHDCOPOPPPPPPPCLPPPPPPPPPPPOCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNEOPHPPPPPPPPPPPPPPPPPPPMPPJCLPPPPPPPPPPPPPPLCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLBBPPPPPPPPPPPPPPPPPPPPPPDDEAHPPPPPPPPPPPPPPPPMIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKCMPPPPPPPPPPPPPPPPPPPPPPPPKIKFPPPPPPPPPPPPPPPPPKLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNNBPPPPPPPPPPPPPPPPPPPPPPPPPMIPMGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLELPPPPPPPPPPPPPPPPPPPPPPPPPIDPPPOBNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGDPPPPLJFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDNPPPPPPPPPPPPPPPPPPPPPPPPPIBNPPPPPPNNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAHPPPPPPPPPPPPPPPPPPPPPPPPOJAPPPPPPPHGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIHPPPPPPPPPPPPPPPPPPPPPPPPOOGNPPPPPPPLENPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPANPPPPPPPPPPPPPPPPMNPPPPPPOOLPPPPPPPPPAMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLEPPPPPPPPPPPPPPPPPJPPPPPPPDNPPPPPPPPPPKPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLIPPPPPKCBDDDDANPPPLFPPPPOBPLPPPPPPPPPPOLFPPPPFDDDDDDBFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLGPPPPPPPKPPPPLNPPPPOHPPPMHLPPPPPPPPPPPKPNPPPPFPPPPJDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOAPPPPPPPPGOPPPOPPPPAPPPODOBPPPPPPPPPPPKPOPPPNFPPPIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPIPPPPOPPPFFPPEHMPPPPPPPPPPPPLPLPPONHPPPBPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPINPPPPPPPPKDNPPONPPAHPPPPBPPPPPPPPPPPPOPKPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCNPPPPPPPPKBEPPLNPPIHPIPPHPPPPPPPPPPPPKPKPKHHPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLAPPPPPPPPKFGNPPPHLAPONPMPPPPPPPPPPPPPAPDPOHPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFMPPPPPPPKFPPPPPJODPLPPFPPPPPPPPPPPPLFOFODPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKJOPPPPPPKFPLFPPOOHLPPJPPPPPPPPPPPPPJPMHPFPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDGOPPPPPKFPPIPPPAPIPPPPPPPPPPPPPPPKFPBPMHPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNFPPPPKFPPPFPPOPFPOHPPPPPPPPPPPPIPPHKGPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHKKGMNLPNPPINPPAPPLPPPPPPPPPPPPPHINOAHPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPONNPPPPHODCLIAGLPOODHPJFBOPPPPPPPPPLGJBPHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPENJDNKCFINPPPPPPLNPPPPGAKPPHPLFFNPPPPPMOGHHPOLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLCBFHPPPPPPKKNPPPPPKFPPPPPEFPPGPPHKFEEIMFAPPPPPKLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMCHPPPPPPPPPPPHPPPPPKFPPPPPKHPJDNPPPPPLHDLPPPPPPNHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHFPPPPPPPPPPPPPPPPPPPKFPPPPONPKCHCPPPPPPPPPPPPPPKOPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPPPPPKFPPPPKPPAIPOPPPPPPPPPPPPPOIPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCDPPPPPPPPPPPPPPPPPPPPPKFPPPPLPPKFPPINPPPPPPPPPPPKPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIIPPPPPPPPPPPPPPPPPPPPPPKFPPPNHPOPMPPONPPPPPPPPPPOPFPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJNPPPPPPPPPPPPPPPPPPPPPPKFPPPNPKNPLPPPHPPPPPPPPPPEMPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDPPPPPPPPPPPPPPPPPPPPPPPKFPPPFPDPPONPPLNPPPPPPPPOGHPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNHPPPPPPPPPPPPPPPPPPPPPPPKFPPAPLHPPPKNPPENPPPPPPPEJPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCHPPPPPPPPPPPPPPPPPPPPPPPKFPODOHPPPPPMPPLNPPPPPPPCNPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBHPPPPPPPPPPPPPPPPPPPPPPPKFPNPPPPPPPPCNPPOPPPPPPIBPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKFPPPJPPPPPPPGPPPOPPPPPDHPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKEIOCPPPPPPPPPFPPONPPPJPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPPPPPPPPPPPPPPPPPPPPPPPPKFJIHPPPPPPPPPCPPLNPPPLHPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPKFADPPPPPPPPPPPFPPPHPIBPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGHPPPPPPPPPPPPPPPPPPPPPPPKENPPPPPPPPPPPPJPPPJPDPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKGPPPPPPPPPPPPPPPPPPPPPPOKFHPPPPPPPPPPPPHGPPOJLPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLOFPPPPPPPPPPPPPPPPPPPPOKKFPPPPPPPPPPPPPPEPPPDHPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNNPPPPPPPPPPPPPPPPPPPMJKFPPPPPPPPPPPPPPLOPPNPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLHGPPPPPPPPPPPPPPPPPPMJPOHPPPPPPPPPPPPPPPDNPFPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDIOPPPPPPPPPPPPPPPPEJPPOFPPPPPPPPPPPPPPPLLEPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCBHPPPPPPPPPPPPPNEFPPPMOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGKMPPPPPPPPPOIIPPPPPIAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJHGEPNPOPMFMLHPPPPPBAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDHKAIDFPDPPPPPPPLFKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPLMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHPPLFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBPPPEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMDPPPPKNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMJHPPPPPPLBMPPPPPPPPPPPPPPPPPPPPPPPPPPPEPPPPLKHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDDHPPPPPPPPLHDOPPPPPPPPPPPPPPPPPPPPPPLLDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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"
            alt="PartyMashup Logo"
            style={{width:44,height:44,objectFit:"contain",borderRadius:8}}/>
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
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=70&auto=format" alt="Party" fetchpriority="high" decoding="async"/>
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
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div className="section-header reveal">
            <div className="section-label">Our Collection</div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-sub">Quality toys, balloons & decoration supplies</p>
          </div>

          {/* Tab + Search bar */}
          <div className="reveal" style={{display:"flex",gap:12,marginBottom:28,flexWrap:"wrap",alignItems:"center"}}>
            <div className="tab-bar">
              {[["products","🛍️ Products"],["services","🎪 Decoration"]].map(([t,l])=>(
                <button key={t} onClick={()=>{setTab(t);setExpandedCat(null);setCat("All");}}
                  className={`tab-btn${tab===t?" active":""}`}>{l}</button>
              ))}
            </div>
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input value={search} onChange={e=>{setSearch(e.target.value);setExpandedCat(null);}}
                placeholder="Search products…"/>
            </div>
          </div>

          {loadingData
            ? <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
                {[1,2,3,4,5,6].map(i=>(
                  <div key={i} style={{borderRadius:16,overflow:"hidden",border:"1.5px solid #eee"}}>
                    <div className="skel" style={{height:200}}/>
                    <div style={{padding:12}}>
                      <div className="skel" style={{height:14,marginBottom:8}}/>
                      <div className="skel" style={{height:18,width:"60%",marginBottom:8}}/>
                      <div className="skel" style={{height:12,width:"40%"}}/>
                    </div>
                  </div>
                ))}
              </div>

            : tab==="services"
            ? <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
                {services.map(item=>(
                  <NCard key={item._id||item.id} item={item} onAdd={addToCart} isService/>
                ))}
              </div>

            : search
            ? <>
                <p style={{color:"#888",marginBottom:16,fontWeight:700}}>
                  {filtered.length} result{filtered.length!==1?"s":""} for "{search}"
                </p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
                  {filtered.map(item=><NCard key={item._id||item.id} item={item} onAdd={addToCart}/>)}
                </div>
                {filtered.length===0&&(
                  <div style={{textAlign:"center",padding:"60px 0",color:"#bbb"}}>
                    <div style={{fontSize:56}}>🔍</div>
                    <p style={{marginTop:12,fontWeight:800,fontSize:18}}>No results for "{search}"</p>
                  </div>
                )}
              </>

            : expandedCat
            ? <>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
                  <button onClick={()=>setExpandedCat(null)} className="btn btn-outline btn-sm">← Back</button>
                  <h2 style={{fontFamily:"'Lilita One',cursive",fontSize:22}}>{expandedCat}</h2>
                </div>
                <div className="cat-full-grid">
                  {products.filter(p=>p.category===expandedCat).map(item=>(
                    <NCard key={item._id||item.id} item={item} onAdd={addToCart}/>
                  ))}
                </div>
              </>

            : /* Default — category rows */
              (() => {
                const cats=[...new Set(products.map(p=>p.category).filter(Boolean))];
                return cats.length===0
                  ? <div style={{textAlign:"center",padding:"60px 0",color:"#bbb"}}>
                      <div style={{fontSize:56}}>📦</div>
                      <p style={{marginTop:12,fontWeight:800}}>No products yet</p>
                    </div>
                  : cats.map(cat=>(
                      products.filter(p=>p.category===cat).length>0&&(
                        <CategoryRow key={cat} cat={cat}
                          items={products.filter(p=>p.category===cat)}
                          onAdd={addToCart}
                          onSeeAll={()=>setExpandedCat(cat)}/>
                      )
                    ));
              })()
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
                <div className="scard-img">
                    <img src={svc.img?.includes("unsplash.com")?svc.img.replace(/w=\d+/,"w=400").replace(/q=\d+/,"q=70"):svc.img}
                      alt={svc.name} loading="lazy" decoding="async"
                      style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  </div>
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
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBkAGQAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAACtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADx8DtRvwSqK+iTcXUfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPgC3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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//EAAL/2gAMAwEAAgADAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDPNGMMONCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBFLDKIABPPOBBAAAAAAAAABHLNAEAAAAAAMFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLGNEAIAIEMEAEAAPGPACAAAABIKIAAAAAAAAAAEFLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDFKAAAAAAAAAAAAAAAAAMHDLCAHIIAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLOIIAAAAAAAAAAAAAAAAAAAAEEPGEAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGGIAAAAAAAAAAAAAAAAAAAAAAAAJEOAAAAAAAAAAAAAAAAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPEAAAAAAAAAAAAAAAAAAAAAAAAAAJANPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEKAAAAAAAAAAAAAAAAAAAAAAAAACDAAAAANCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAPCAAAAAEFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAAAAAAAAAAAAAAAAAAAAAAAAMOAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCAAAAAAAAAAAAAAAAAAAAAAAAAFNIAAAAAAAAPCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCAAAAAAAAAAAAAAAADCAAAAAAHBKAAAAAAAAANPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAECAAAAAFGDIAAAAAAAAABBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAABLDCAAAAGCAAAENAAAABKAOAAAAAAAAAAFEKAAAABAAAAACDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJAAAAAAMIAAAAEKAAAAPAAAAGIBIAAAAAAAAAAEACAAABDAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAEDAAABAAAAHCAABGBEAAAAAAAAAAAAABAAABDAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAMAAAABAAAICAAHIGAAAAAAAAAAAAAABAABBNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAABCAABCAANAAAAAMAAAAAAAAAAAAFAFAAAGFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCAAAAAAAAAGDAAEDAAOIAPAACAAAAAAAAAAAAJABAAGIFAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNAAAAAAAAAKMAAAEIBLAECAGAAAAAAAAAAAAAFAKAFAAFAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKAAAAAAAAKAJAAAPEIAGABKAAAAAAAAAAAAACBIBOAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOCAAAAAAAKAEIAABGIEAADAAAAAAAAAAAAALACAEEAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJJAAAAAAAKAANAAALANAACAAAAAAAAAAAAACAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPBAAAAAKAAEIAAANCAFIAAAAAAAAAAAAHACAAKAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMBLCAELDCHLCAEJAAMAAAAAAAAAAAADIHCACAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBCBDAAAAAMEPJDPONEEDAGIAHIDKAAAAAAAAABJHAAHAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCHIONBEMHPDAAAAAAECAAAAAKJAAKAEFICAAAAABPIPAABGIAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOMIAAAAAAEAOCAAAAAAKAAAAECKABIAAEGHHLDHHHCEAAAEEAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGKIAAAAAAAAAAAIAAAAAAKAAAAABIAHNCAAAEEMMIIAAAAABAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHMAAAAAAAAAAAAAAAAAAAAKAAAABCAEJALAAAAAAAAAAAAAAHIAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEGAAAAAAAAAAAAAAAAAAAAAKAAAAAAALLAFKAAAAAAAAAAAABJAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAAAAAAAAAAAAAAAAAAAAKAAAAEABBKAALAAAAAAAAAAAAGEAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAGEJAABCAAAAAAAAAAAJIAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIAAAAAAAAAAAAAAAAAAAAAAAKAAAKAECAIAAAIAAAAAAAAAACGAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOAAAAAAAAAAAAAAAAAAAAAAAAKAAACAKAAEKAAECAAAAAAAABPIAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFIAAAAAAAAAAAAAAAAAAAAAAAAKAAJAECAAANCAAKCAAAAAAAGCAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAKABGBIAAAAADAAEKAAAAAABOAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAKABAGAAAAAABCAABAAAAAADKAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAKAKBMAAAAAAACAAABAAAABJAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAKFBNAAAAAAAAAKAABCAAABKAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAOODAAAAAAAAAAGAAEDAAAAIAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCAAAAAAAAAAAAAAAAAAAAAAAAKPKAAAAAAAAAAFIAAEIAGEAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANIAAAAAAAAAAAAAAAAAAAAAAAALGAAAAAAAAAAAAFAAAPBJIAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHAAAAAAAAAAAAAAAAAAAAAABAOAAAAAAAAAAAAAELAABEMAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAAAAAAABPAKAAAAAAAAAAAAAAMAAAMAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLAAAAAAAAAAAAAAAAAAAAHBAKAAAAAAAAAAAAAAALAAKAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAAAAAAAAAAAAAAAAAAFPAEIAAAAAAAAAAAAAAAMCEIAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAAAAAAAAAAAAAAAABFBAAFCAAAAAAAAAAAAAAAEHKAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENBAAAAAAAAAAAAACEEAAAHCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECHAAAAAAAAAACOOGAAAAHPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEABDDAAAABGNCAAAAAAGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMNPHMNAMAAAAAAABKECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAJADAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAEKDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEIAAAAAAAAEMEAAAAAAAAAAAAAAAAAAAAAAAAEMAAAAAAAMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNONPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNJANICBCPKOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPONNAEIFHPGEEFPONPPPPPPPPPLINDPPPPPPLIGJNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIDACPDHDLPPLHPHDCOPOPPPPPPPCLPPPPPPPPPPPOCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNEOPHPPPPPPPPPPPPPPPPPPPMPPJCLPPPPPPPPPPPPPPLCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLBBPPPPPPPPPPPPPPPPPPPPPPDDEAHPPPPPPPPPPPPPPPPMIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKCMPPPPPPPPPPPPPPPPPPPPPPPPKIKFPPPPPPPPPPPPPPPPPKLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNNBPPPPPPPPPPPPPPPPPPPPPPPPPMIPMGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLELPPPPPPPPPPPPPPPPPPPPPPPPPIDPPPOBNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGDPPPPLJFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDNPPPPPPPPPPPPPPPPPPPPPPPPPIBNPPPPPPNNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAHPPPPPPPPPPPPPPPPPPPPPPPPOJAPPPPPPPHGPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIHPPPPPPPPPPPPPPPPPPPPPPPPOOGNPPPPPPPLENPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPANPPPPPPPPPPPPPPPPMNPPPPPPOOLPPPPPPPPPAMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLEPPPPPPPPPPPPPPPPPJPPPPPPPDNPPPPPPPPPPKPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLIPPPPPKCBDDDDANPPPLFPPPPOBPLPPPPPPPPPPOLFPPPPFDDDDDDBFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLGPPPPPPPKPPPPLNPPPPOHPPPMHLPPPPPPPPPPPKPNPPPPFPPPPJDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOAPPPPPPPPGOPPPOPPPPAPPPODOBPPPPPPPPPPPKPOPPPNFPPPIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPIPPPPOPPPFFPPEHMPPPPPPPPPPPPLPLPPONHPPPBPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPINPPPPPPPPKDNPPONPPAHPPPPBPPPPPPPPPPPPOPKPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCNPPPPPPPPKBEPPLNPPIHPIPPHPPPPPPPPPPPPKPKPKHHPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLAPPPPPPPPKFGNPPPHLAPONPMPPPPPPPPPPPPPAPDPOHPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFMPPPPPPPKFPPPPPJODPLPPFPPPPPPPPPPPPLFOFODPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKJOPPPPPPKFPLFPPOOHLPPJPPPPPPPPPPPPPJPMHPFPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDGOPPPPPKFPPIPPPAPIPPPPPPPPPPPPPPPKFPBPMHPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNFPPPPKFPPPFPPOPFPOHPPPPPPPPPPPPIPPHKGPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHKKGMNLPNPPINPPAPPLPPPPPPPPPPPPPHINOAHPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPONNPPPPHODCLIAGLPOODHPJFBOPPPPPPPPPLGJBPHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOPENJDNKCFINPPPPPPLNPPPPGAKPPHPLFFNPPPPPMOGHHPOLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLCBFHPPPPPPKKNPPPPPKFPPPPPEFPPGPPHKFEEIMFAPPPPPKLPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMCHPPPPPPPPPPPHPPPPPKFPPPPPKHPJDNPPPPPLHDLPPPPPPNHPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHFPPPPPPPPPPPPPPPPPPPKFPPPPONPKCHCPPPPPPPPPPPPPPKOPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPPPPPKFPPPPKPPAIPOPPPPPPPPPPPPPOIPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCDPPPPPPPPPPPPPPPPPPPPPKFPPPPLPPKFPPINPPPPPPPPPPPKPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIIPPPPPPPPPPPPPPPPPPPPPPKFPPPNHPOPMPPONPPPPPPPPPPOPFPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJNPPPPPPPPPPPPPPPPPPPPPPKFPPPNPKNPLPPPHPPPPPPPPPPEMPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLDPPPPPPPPPPPPPPPPPPPPPPPKFPPPFPDPPONPPLNPPPPPPPPOGHPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNHPPPPPPPPPPPPPPPPPPPPPPPKFPPAPLHPPPKNPPENPPPPPPPEJPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCHPPPPPPPPPPPPPPPPPPPPPPPKFPODOHPPPPPMPPLNPPPPPPPCNPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBHPPPPPPPPPPPPPPPPPPPPPPPKFPNPPPPPPPPCNPPOPPPPPPIBPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKFPPPJPPPPPPPGPPPOPPPPPDHPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPKEIOCPPPPPPPPPFPPONPPPJPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPPPPPPPPPPPPPPPPPPPPPPPPKFJIHPPPPPPPPPCPPLNPPPLHPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPKFADPPPPPPPPPPPFPPPHPIBPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGHPPPPPPPPPPPPPPPPPPPPPPPKENPPPPPPPPPPPPJPPPJPDPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKGPPPPPPPPPPPPPPPPPPPPPPOKFHPPPPPPPPPPPPHGPPOJLPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLOFPPPPPPPPPPPPPPPPPPPPOKKFPPPPPPPPPPPPPPEPPPDHPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNNPPPPPPPPPPPPPPPPPPPMJKFPPPPPPPPPPPPPPLOPPNPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLHGPPPPPPPPPPPPPPPPPPMJPOHPPPPPPPPPPPPPPPDNPFPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDIOPPPPPPPPPPPPPPPPEJPPOFPPPPPPPPPPPPPPPLLEPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPCBHPPPPPPPPPPPPPNEFPPPMOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGKMPPPPPPPPPOIIPPPPPIAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPJHGEPNPOPMFMLHPPPPPBAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDHKAIDFPDPPPPPPPLFKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIPLMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOHPPLFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPBPPPEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMDPPPPKNPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFPPPAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPMJHPPPPPPLBMPPPPPPPPPPPPPPPPPPPPPPPPPPPEPPPPLKHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDDHPPPPPPPPLHDOPPPPPPPPPPPPPPPPPPPPPPLLDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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"
                alt="logo" style={{width:40,height:40,objectFit:"contain",borderRadius:6,background:"#fff",padding:2}}/>
              <span style={{fontFamily:"'Lilita One',cursive",fontSize:22,color:"#fff"}}>Party<span style={{color:"var(--yellow)"}}>Mashup</span></span>
            </div>
            <p style={{fontSize:14,color:"rgba(255,255,255,.45)",lineHeight:1.8}}>
              Indirapuram's favourite toy & party decoration store. Making every celebration magical since 2018.
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Find Us</p>
            {["S3, Plot No. 185, Gyan Khand-1","Indirapuram, Ghaziabad – 201014","📞 9999512384 / 9911510687","⏰ Wed–Mon: 10:30 AM – 9:00 PM","🔴 Closed on Tuesdays"].map(l=><p key={l}>{l}</p>)}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Areas We Serve</p>
            {["Indirapuram","Vaishali","Vasundhara","Patparganj","Kaushambi","Rajnagar Ext.","& nearby areas"].map(a=><p key={a}>📌 {a}</p>)}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">We Offer</p>
            {["Kids Toys","Balloons","Birthday Decoration","Anniversary Decoration","Any Type of Décor","Candle & Cake Toppers","3D Stars, Hearts & Butterflies","Gift Items","Glow Sticks"].map(c=><a key={c} href="#">{c}</a>)}
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
  const [fd,setFd]=useState({name:"",category:"",price:"",img:"",desc:"",tag:"",stock:99});
  const [catTab,setCatTab]=useState(false); // show category manager
  const [newCat,setNewCat]=useState("");
  // Categories stored in localStorage so they persist
  const [customCats,setCustomCats]=useState(()=>{
    try{const s=localStorage.getItem("pm_cats");
      return s?JSON.parse(s):["Toys","Balloons","Decoration","Candles & Cake Toppers","3D Decor","Gifts","Glow Sticks"];
    }catch{return ["Toys","Balloons","Decoration"];}
  });
  const saveCats=cats=>{setCustomCats(cats);localStorage.setItem("pm_cats",JSON.stringify(cats));};
  const addCat=()=>{
    const t=newCat.trim();
    if(!t||customCats.includes(t))return;
    saveCats([...customCats,t]);
    setNewCat("");
    showT("✅ Category added!");
  };
  const delCat=cat=>{
    saveCats(customCats.filter(c=>c!==cat));
    showT("🗑️ Category removed.");
  };
  const showT=msg=>{setToast(msg);setTimeout(()=>setToast(""),2600);};

  useEffect(()=>{
    Promise.all([API.getAdminStats(),API.getProducts(),API.getServices(),API.getAdminOrders()])
      .then(([s,p,sv,o])=>{setStats(s);setProducts(p);setServices(sv);setOrders(o.orders||[]);})
      .catch(()=>{})
      .finally(()=>setLoading(false));
  },[]);

  const data=itemTab==="products"?products:services;
  const setData=itemTab==="products"?setProducts:setServices;

  const openAdd=()=>{setEditItem(null);setFd({name:"",category:customCats[0]||"Toys",price:"",img:"",desc:"",tag:"",stock:99});setShowForm(true);};
  const openEdit=item=>{setEditItem(item);setFd({name:item.name,category:item.category||"",price:item.price,img:item.img,desc:item.desc,tag:item.tag||"",stock:item.stock??99});setShowForm(true);};

  const save=async()=>{
    if(!fd.name||!fd.price)return;
    const payload={name:fd.name,category:fd.category,price:Number(fd.price),img:fd.img,desc:fd.desc,tag:fd.tag,stock:Number(fd.stock??99)};
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
            {[["overview","📊 Overview"],["items","🛍️ Products"],["orders","📦 Orders"],["cats","🏷️ Categories"]].map(([t,l])=>(
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

        {/* CATEGORIES */}
        {tab==="cats"&&(
          <div style={{maxWidth:600}}>
            <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,marginBottom:6}}>Manage Categories</h3>
            <p style={{color:"#888",fontSize:13,marginBottom:24}}>
              Categories you add here will appear in the product form dropdown and on the store.
            </p>

            {/* Add new */}
            <div style={{display:"flex",gap:10,marginBottom:28}}>
              <input value={newCat} onChange={e=>setNewCat(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&addCat()}
                placeholder="Type new category name… e.g. Glow Sticks"
                style={{flex:1,padding:"12px 16px",borderRadius:12,border:"2px solid #EBEBEB",
                  fontSize:14,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
              <button className="btn btn-primary" onClick={addCat} style={{borderRadius:12,padding:"12px 22px"}}>
                ＋ Add
              </button>
            </div>

            {/* Category list */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {customCats.map((cat,i)=>(
                <div key={cat} style={{display:"flex",alignItems:"center",justifyContent:"space-between",
                  background:"#fff",border:"2px solid #EBEBEB",borderRadius:12,padding:"12px 16px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{background:"#FFF0F0",color:"#FF3B3B",borderRadius:8,padding:"4px 10px",
                      fontSize:12,fontWeight:800}}>#{i+1}</span>
                    <span style={{fontWeight:700,fontSize:15}}>{cat}</span>
                    <span style={{fontSize:12,color:"#aaa"}}>
                      ({products.filter(p=>p.category===cat).length} products)
                    </span>
                  </div>
                  <button onClick={()=>delCat(cat)}
                    style={{background:"#FEE2E2",border:"none",borderRadius:8,padding:"6px 14px",
                      color:"#DC2626",cursor:"pointer",fontSize:12,fontWeight:800}}>
                    🗑️ Remove
                  </button>
                </div>
              ))}
            </div>

            {customCats.length===0&&(
              <div style={{textAlign:"center",padding:"40px 0",color:"#bbb"}}>
                <div style={{fontSize:48}}>🏷️</div>
                <p style={{marginTop:12,fontWeight:800}}>No categories yet. Add one above!</p>
              </div>
            )}
          </div>
        )}

        {/* ORDERS */}
        {!loading&&tab==="orders"&&(
          <>
            <h3 style={{fontFamily:"'Lilita One',cursive",fontSize:22,marginBottom:20}}>All Orders</h3>
            <div className="dash-table">
              <table>
                <thead><tr>{["Order","Customer","Address","Items","Total","Payment","Status","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
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
                      <td style={{fontSize:12,color:"#555",maxWidth:180}}>
                        <p style={{fontWeight:600}}>{o.address||"—"}</p>
                        {o.eventDate&&<p style={{color:"#aaa",fontSize:11}}>📅 {o.eventDate}</p>}
                        {o.note&&<p style={{color:"#aaa",fontSize:11,fontStyle:"italic"}}>"{o.note}"</p>}
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
        {itemTab==="products"&&(
          <div className="field">
            <label>Category *</label>
            <select value={fd.category} onChange={e=>setFd(f=>({...f,category:e.target.value}))}
              style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #EBEBEB",
                fontSize:14,fontFamily:"'Nunito',sans-serif",outline:"none",background:"#fff"}}>
              <option value="">— Select Category —</option>
              {customCats.map(cat=><option key={cat} value={cat}>{cat}</option>)}
            </select>
            <p style={{fontSize:12,color:"#aaa",marginTop:4}}>
              Need a new category? 
              <span style={{color:"#FF3B3B",cursor:"pointer",fontWeight:800,marginLeft:4}}
                onClick={()=>{setShowForm(false);setCatTab(true);}}>
                Manage Categories →
              </span>
            </p>
          </div>
        )}
        <Field label="Price (₹) *" value={fd.price} onChange={v=>setFd(f=>({...f,price:v}))} type="number" placeholder="299" required/>
        <div className="field">
          <label>Stock Quantity</label>
          <input type="number" value={fd.stock??99} onChange={e=>setFd(f=>({...f,stock:e.target.value}))}
            placeholder="99" min="0"
            style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #EBEBEB",fontSize:14,fontFamily:"'Nunito',sans-serif",outline:"none"}}/>
        </div>
        <ImageUploader value={fd.img||""} onChange={v=>setFd(f=>({...f,img:v}))}/>
        <Field label="Description" value={fd.desc} onChange={v=>setFd(f=>({...f,desc:v}))} as="textarea" placeholder="Short description…"/>
        <Field label="Badge Tag"   value={fd.tag}  onChange={v=>setFd(f=>({...f,tag:v}))}  placeholder="Bestseller / New / Popular / Trending"/>
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