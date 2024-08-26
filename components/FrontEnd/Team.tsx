import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Team () {

    const team = [
        {
            avatar: "/manager.jpg",
            name: "Leepile",
            title: "Maneger",
            desc: "love this work",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            facebook: "javascript:void(0)"
        },
        {
            avatar: "/accountant.jpg",
            name: "Boyiselo monne",
            title: "Accountant",
            desc: "The valley has been the industry's standard ",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            facebook: "javascript:void(0)"
        },
        {
            avatar: "/chef.jpg",
            name: "Molapo",
            title: "chef",
            desc: "The valley guest house has been the industry's standard ",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            facebook: "javascript:void(0)"
        },
        {
            avatar: "/cleaner.jpg",
            name: "Vicky tanson",
            title: "cleaner",
            desc: "love this work",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            facebook: "javascript:void(0)"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our talent stuff
                    </h3>
                    <p className="text-gray-600 mt-3">
                        The valley has been the industry's standard guest house Lesotho.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="gap-8 sm:flex">
                                    <div className="w-60 h-60">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                            <Link href={item.twitter}>
                                            <Twitter />                                              
                                            </Link>
                                            <Link href={item.facebook}>
                                               <Facebook />
                                            </Link>
                                            <Link href={item.linkedin}>
                                               <Linkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}