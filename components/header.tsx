export default function Header() {
    return <nav className="scrolled ? 'bg-black/95 py-4 border-b border-white/10' : 'bg-transparent py-8'" >
        <div className="font-display text-3xl italic tracking-tighter uppercase">KISHA FJALA E ZOTIT</div>
        <div className="hidden lg:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-amber-500 transition">Watch</a>
            <a href="#" className="hover:text-amber-500 transition">Locations</a>
            <a href="#" className="hover:text-amber-500 transition">Give</a>
            <a href="#ministries" className="hover:text-amber-500 transition">Join Group</a>
            <a href="#contact" className="hover:text-amber-500 transition">Contact Us</a>
        </div>
        <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition">Plan Your Visit</button>
    </nav >
}