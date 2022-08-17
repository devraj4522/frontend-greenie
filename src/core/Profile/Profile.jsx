import React from "react";
import Base from "../Base";
const Profile = () => {
	return (
		<Base>
			<div class="relative container">
				<img
					src=""
					class="w-full h-72 object-cover rounded-lg"
					alt=""
				/>
				<a
					href="#"
					class="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center"
				>
					<i class="bx bx-edit-alt"></i>
				</a>
			</div>
			<div class="flex items-center gap-4 mt-4">
				<img
					src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
					class="w-28 h-28 object-cover rounded-full"
					alt=""
				/>
				<div>
					<h2 class="text-2xl font-semibold mb-2">Fajar Std</h2>
					<span class="text-lg text-gray-500">fajar_</span>
				</div>
				<a
					href="#"
					class="py-2 px-4 rounded bg-blue-600 sm:flex items-center gap-2 text-white hover:bg-blue-700 ml-auto hidden"
				>
					<i class="bx bx-edit-alt"></i>
					Edit Profile
				</a>
			</div>
			<p class="text-gray-500 text-lg mt-4 mb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusantium vitae tempora culpa laborum inventore mollitia eius
				odit voluptatem perspiciatis magnam ratione sunt, facilis,
				possimus sed delectus. Tempore quaerat aspernatur, numquam
				deleniti omnis alias accusamus sit ea expedita natus ipsa, eos
				aperiam inventore totam? Maiores voluptate excepturi sunt quia
				quo officiis.
			</p>
		</Base>
	);
};

export default Profile;
