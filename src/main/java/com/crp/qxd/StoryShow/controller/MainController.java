package com.crp.qxd.StoryShow.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.crp.qxd.StoryShow.model.Story;
import com.crp.qxd.StoryShow.repository.StoryRepository;
import com.crp.qxd.StoryShow.storage.StorageException;
import com.crp.qxd.StoryShow.storage.StorageService;


@Controller
public class MainController {
	
	private StorageService storageService;
	
	@Autowired
	private StoryRepository storyRepo;

    @Autowired
    public void FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

	@GetMapping("/")
	public String home() {
		 return "index";
	}
	
	@GetMapping("/upload")
	public String upload() {
		return "upload";
	}
	
	@PostMapping("/upload")
	public String handleFileUpload(@RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) {

		try {
			storageService.store(file);
			
			Story st = new Story();
			st.setImagePath(file.getOriginalFilename());
			
			storyRepo.save(st);
		} catch (StorageException e) {
			
		}
        

        return "redirect:/upload";
    }
	
	@GetMapping("/getList")
	@ResponseBody
	public List<Story> getStoriesList() {
		List<Story> lista = storyRepo.findAll();
		return lista;
	}
	
}
