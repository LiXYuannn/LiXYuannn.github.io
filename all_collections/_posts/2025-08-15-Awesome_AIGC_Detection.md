---
layout: post
title: Awesome-AIGC-Detection
date: 2025-08-15 00:00:00
categories: ["深度学习","论文整理"]
---

本文取自笔者参与合作的github repo文档，并分工于大部分根据论文列表查阅搜集相关材料的工作。该repo的仓库地址为[🔗](https://github.com/MuskAI/Awesome-AIGC-Detection)；该repo基于一已有项目[戳这里](https://github.com/RFAI2025/Awesome-AIGC-Image-Detection/tree/main)构建（给前辈们撒花致谢🎉），并且对截止2025.7.2之前的AIGC检测相关论文进行整理。

照片本是记录生活的介质，如今却因AI技术面临"信任危机"——AIGC的飞速发展，让"PS都弱爆了"的时代真正来临。当眼见不再为实，如何鉴别AI生成的"照骗"已成为AI安全领域的头号挑战之一。本清单系统整理AIGC图像检测相关研究，希望对大家有所帮助。 

## 📚Datasets

|  Year   | Dataset  |  Number of Real  |  Number of Fake  |  Source of Real Image  |  Generation Method of Fake Image  |
|  ----  | ----  |  ----  | ----  |  ----  | ----  |
| 2020  | [CNNSpot](https://peterwang512.github.io/CNNDetection/) | 362,000  |  362,000 | LSUN, ImageNet, CelebA, COCO... | ProGAN, StyleGAN, BigGAN, CRN, SITD... |
| 2023  | [GenImage](https://genimage-dataset.github.io/) | 1,331,167  |  1,350,000 | ImagNet | SDMs, Midjourney, BigGAN |
| 2023  | [Fake2M](https://github.com/Inf-imagine/Sentry) | -  |  2,300,000 | CC3M | SD-V1.5, IF, StyleGAN3 |
| 2023  | [DMimage](https://github.com/grip-unina/DMimageDetection) | 200,000  |  200,000 | COOC, LSUN | LDM |
| 2023  | [DiffusionDB](https://github.com/poloclub/diffusiondb) | 3,300,000  |  16,000,000 | DiscordChatExporter | SD |
| 2024  | WildFake | 2,557,278  | 1,013,446 | ImagNet, Laion, Wukong, COO...  | BigGAN, StyleGAN, StarGAN, Midjourney, DALLE... |

## 📝Papers
  
### 2️⃣0️⃣2️⃣5️⃣

- ![](https://img.shields.io/badge/25-ICML-blue) Few-Shot Learner Generalizes Across AI-Generated Image Detection    
[[Paper](https://arxiv.org/pdf/2501.08763)] [[Code](https://github.com/teheperinko541/Few-Shot-AIGI-Detector)]
- ![](https://img.shields.io/badge/25-CVPR-green) Forensic Self-Descriptions Are All You Need for Zero-Shot Detection, Open-Set Source Attribution, and Clustering of AI-generated Images     
[[Paper](https://arxiv.org/abs/2503.21003)]
- ![](https://img.shields.io/badge/25-CVPR-green) Beyond Generation: A Diffusion-based Low-level Feature Extractor for Detecting AI-generated Images      
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhong_Beyond_Generation_A_Diffusion-based_Low-level_Feature_Extractor_for_Detecting_AI-generated_CVPR_2025_paper.pdf)]
- ![](https://img.shields.io/badge/25-CVPR-green) Secret Lies in Color: Enhancing AI-Generated Images Detection with Color Distribution Analysis       
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Jia_Secret_Lies_in_Color_Enhancing_AI-Generated_Images_Detection_with_Color_CVPR_2025_paper.pdf)]
- ![](https://img.shields.io/badge/25-CVPR-green) Towards Universal AI-Generated Image Detection by Variational Information Bottleneck Network      
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_Towards_Universal_AI-Generated_Image_Detection_by_Variational_Information_Bottleneck_Network_CVPR_2025_paper.pdf)]
- ![](https://img.shields.io/badge/25-CVPR-green) Where's the Liability in the Generative Era? Recovery-based Black-Box Detection of AI-Generated Content      
[[Paper](https://arxiv.org/abs/2505.01008)]
- ![](https://img.shields.io/badge/25-CVPR-green) FIRE: Robust Detection of Diffusion-Generated Images via Frequency-Guided Reconstruction Error     
[[Paper](https://arxiv.org/abs/2412.07140)]
- ![](https://img.shields.io/badge/25-CVPR-green) Forensic Self-Descriptions Are All You Need for Zero-Shot Detection, Open-Set Source Attribution, and Clustering of AI-generated Images      
[[Paper](https://arxiv.org/abs/2503.21003)]
- ![](https://img.shields.io/badge/25-ICML-blue) Orthogonal Subspace Decomposition for Generalizable AI-Generated Image Detection      
[[Paper](https://arxiv.org/pdf/2411.15633)] [[code](https://github.com/YZY-stack/Effort-AIGI-Detection)]
- ![](https://img.shields.io/badge/25-CVPR-green) D<sup>3</sup> Scaling Up Deepfake Detection by Learning     
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Yang_D3_Scaling_Up_Deepfake_Detection_by_Learning_from_Discrepancy_CVPR_2025_paper.pdf)] [[Code](https://github.com/BigAandSmallq/D3)]
- ![](https://img.shields.io/badge/25-CVPR-green) SIDA: Social Media Image Deepfake Detection, Localization and Explanation with Large Multimodal Model       
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/supplemental/Huang_SIDA_Social_Media_CVPR_2025_supplemental.pdf)] [[Code](https://github.com/hzlsaber/SIDA)]
- ![](https://img.shields.io/badge/25-CVPR-green) A Bias-Free Training Paradigm for More General AI-generated Image Detection      
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Guillaro_A_Bias-Free_Training_Paradigm_for_More_General_AI-generated_Image_Detection_CVPR_2025_paper.pdf)] [[Code](https://github.com/grip-unina/B-Free)]
- ![](https://img.shields.io/badge/25-CVPR-green) Any-Resolution AI-Generated Image Detection by Spectral Learning     
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Karageorgiou_Any-Resolution_AI-Generated_Image_Detection_by_Spectral_Learning_CVPR_2025_paper.pdf)] [[Code](https://github.com/mever-team/spai)]
- ![](https://img.shields.io/badge/25-CVPR-green) TextureCrop: Enhancing Synthetic Image Detection through Texture-based Cropping      
[[Paper](https://arxiv.org/pdf/2407.15500)] [[Code](https://github.com/mever-team/texture-crop)]
- ![](https://img.shields.io/badge/25-CVPR-green) HEIE: MLLM-Based Hierarchical Explainable AIGC Image Implausibility Evaluator     
[[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Yang_HEIE_MLLM-Based_Hierarchical_Explainable_AIGC_Image_Implausibility_Evaluator_CVPR_2025_paper.pdf)] [[Datasets](https://github.com/yfthu/HEIE/tree/main/Expl-AIGI-Eval%20Dataset)] [[Code](https://github.com/yfthu/HEIE/tree/main/Expl-AIGI-Eval%20Dataset)]
- ![](https://img.shields.io/badge/25-KDD-yellow) Improving Synthetic Image Detection Towards Generalization: An Image Transformation Perspective       
[[Paper](https://arxiv.org/pdf/2408.06741)] [[Code](https://github.com/Ouxiang-Li/SAFE)]
- ![](https://img.shields.io/badge/25-WACV-red) SFLD: Reducing the content bias for AI-generated Image Detection     
[[Paper](https://openaccess.thecvf.com/content/WACV2025/papers/Gye_Reducing_the_Content_Bias_for_AI-Generated_Image_Detection_WACV_2025_paper.pdf)]
- ![](https://img.shields.io/badge/25-ICLR-orange) A SANITY CHECK FOR AI-GENERATED IMAGE DETECTION       
[[Paper](https://arxiv.org/pdf/2406.19435)] [[Code](https://github.com/shilinyan99/AIDE)]
- ![](https://img.shields.io/badge/25-ICLR-orange) FAKESHIELD: EXPLAINABLE IMAGE FORGERY DETECTION AND LOCALIZATION VIA MULTI-MODAL LARGE LANGUAGE MODELS     
[[Paper](https://arxiv.org/pdf/2410.02761)] [[Code](https://github.com/zhipeixu/FakeShield)]
- ![](https://img.shields.io/badge/25-arxiv-purple) Exploring the Collaborative Advantage of Low-level Information on Generalizable AI-Generated Image Detection     
[[Paper](https://arxiv.org/pdf/2504.00463)]
- ![](https://img.shields.io/badge/25-arxiv-purple) HYPERDET: GENERALIZABLE DETECTION OF SYNTHESIZED IMAGES BY GENERATING AND MERGING A MIXTURE OF HYPER LORAS      
[[Paper](https://arxiv.org/pdf/2410.06044)]
- ![](https://img.shields.io/badge/25-arxiv-purple) Zooming In on Fakes: A Novel Dataset for Localized AI-Generated Image Detection with Forgery Amplification Approach     
[[Paper](https://arxiv.org/pdf/2504.11922)] [[Code](https://github.com/clpbc/BR-Gen)]
- ![](https://img.shields.io/badge/25-arxiv-purple) AntifakePrompt: Prompt-Tuned Vision-Language Models are Fake Image Detectors    
[[Paper](https://arxiv.org/pdf/2310.17419)] [[Code](https://github.com/nctu-eva-lab/AntifakePrompt)]
- ![](https://img.shields.io/badge/25-arxiv-purple) Can GPT tell us why these images are synthesized? Empowering Multimodal Large Language Models for Forensics     
[[Paper](https://arxiv.org/pdf/2504.11686)]
- ![](https://img.shields.io/badge/25-arxiv-purple) Exploring Modality Disruption in Multimodal Fake News Detection      
[[Paper](https://arxiv.org/pdf/2504.09154)]



### 2️⃣0️⃣2️⃣4️⃣
  
- ![](https://img.shields.io/badge/24-CVPR-green) FakeInversion: Learning to Detect Images from Unseen Text-to-Image Models by Inverting Stable Diffusion    
[[Paper](https://arxiv.org/pdf/2406.08603)] [[Code](https://fake-inversion.github.io/)]
- ![](https://img.shields.io/badge/24-CVPR-green) Forgery-aware Adaptive Transformer for Generalizable Synthetic     
[[Paper](https://openaccess.thecvf.com/content/CVPR2024/papers/Liu_Forgery-aware_Adaptive_Transformer_for_Generalizable_Synthetic_Image_Detection_CVPR_2024_paper.pdf)] [[Code](https://github.com/Michel-liu/FatFormer?tab=readme-ov-file)]
- ![](https://img.shields.io/badge/24-CVPR-green) Rethinking the Up-Sampling Operations in CNN-based Generative Network for Generalizable Deepfake Detection    
[[Paper](https://openaccess.thecvf.com/content/CVPR2024/papers/Tan_Rethinking_the_Up-Sampling_Operations_in_CNN-based_Generative_Network_for_Generalizable_CVPR_2024_paper.pdf)] [[Code](https://github.com/chuangchuangtan/NPR-DeepfakeDetection)]
- ![](https://img.shields.io/badge/24-CVPR-green) LaRE<sup>2</sup>: Latent Reconstruction Error Based Method for Diffusion-Generated Image Detection    
[[Paper](https://arxiv.org/pdf/2403.17465)] [[Code](https://github.com/luo3300612/LaRE)]
- ![](https://img.shields.io/badge/24-CVPR-green) AEROBLADE: Training-Free Detection of Latent Diffusion Images Using Autoencoder Reconstruction Error     
[[Paper](https://arxiv.org/pdf/2401.17879)] [[Code](https://github.com/jonasricker/aeroblade)]
- ![](https://img.shields.io/badge/24-ACL-brown) MiRAGeNews: Multimodal Realistic AI-Generated News Detection      
[[Paper](https://aclanthology.org/2024.findings-emnlp.959.pdf)] [[Code](https://github.com/nosna/miragenews)]
- ![](https://img.shields.io/badge/24-ECCV-blue) Zero-Shot Detection of AI-Generated Images     
[[Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02665.pdf)] [[Code](https://github.com/grip-unina/ZED/)]
- ![](https://img.shields.io/badge/24-ECCV-blue) Leveraging Representations from Intermediate Encoder-blocks for Synthetic Image Detection     
[[Paper](https://arxiv.org/pdf/2402.19091)] [[Code](https://github.com/mever-team/rine/tree/main?tab=readme-ov-file)]
- ![](https://img.shields.io/badge/24-ECCV-blue) Contrasting Deepfakes Diffusion via Contrastive Learning and Global-Local Similarities      
[[Paper](https://arxiv.org/pdf/2407.20337)] [[Code](https://github.com/aimagelab/CoDE)]
- ![](https://img.shields.io/badge/24-ICML-yellow) DRCT: Diffusion Reconstruction Contrastive Training towards Universal Detection of Diffusion Generated Images [[Paper](https://openreview.net/pdf?id=oRLwyayrh1)] [[Code](https://github.com/beibuwandeluori/DRCT)]
- ![](https://img.shields.io/badge/24-ICML-yellow) Exposing the Fake: Effective Diffusion-Generated Images Detection      
[[Paper](https://arxiv.org/pdf/2307.06272)] [[Code](https://github.com/grip-unina/DMimageDetection)]
- ![](https://img.shields.io/badge/24-ICML-yellow) How to Trace Latent Generative Model Generated Images without Artificial Watermark?      
[[Paper](https://arxiv.org/pdf/2405.13360)] [[Code](https://github.com/ZhentingWang/LatentTracer)]
- ![](https://img.shields.io/badge/24-ICMR-orange) CLIPping the Deception: Adapting Vision-Language Models for Universal Deepfake Detection      
[[Paper](https://dl.acm.org/doi/pdf/10.1145/3652583.3658035?__cf_chl_tk=52uMrPHjHFZ_5l.v3gqWEAAZLY7rDpWSndFDcA4MsQ8-1739784272-1.0.1.1-9QaZoAk9FhSYgOCA67OOS7E44PzqmrDa0Bdu6dzlPFY)] [[Code](https://github.com/sfimediafutures/CLIPping-the-Deception)]
- ![](https://img.shields.io/badge/24-ICASSP-red) Harnessing the Power of Large Vision Language Models for Synthetic Image Detection      
[[Paper](https://arxiv.org/pdf/2404.02726)] [[Code](https://github.com/Mamadou-Keita/VLM-DETECT?tab=readme-ov-file)]
- ![](https://img.shields.io/badge/24-ACM_CSS-brown) DE-FAKE: Detection and Attribution of Fake Images Generated by Text-to-Image Generation Models      
[[Paper](https://arxiv.org/pdf/2210.06998)] [[Code](https://github.com/zeyangsha/De-Fake)]
- ![](https://img.shields.io/badge/24-CVPRW-green) Raising the Bar of AI-generated Image Detection with CLIP      
[[Paper](https://openaccess.thecvf.com/content/CVPR2024W/WMF/papers/Cozzolino_Raising_the_Bar_of_AI-generated_Image_Detection_with_CLIP_CVPRW_2024_paper.pdf)] [[Code](https://github.com/grip-unina/ClipBased-SyntheticImageDetection/)]
- ![](https://img.shields.io/badge/24-CVPRW-green) Faster Than Lies: Real-time Deepfake Detection using Binary Neural Networks      
[[Paper](https://openaccess.thecvf.com/content/CVPR2024W/DFAD/papers/Lanzino_Faster_Than_Lies_Real-time_Deepfake_Detection_using_Binary_Neural_Networks_CVPRW_2024_paper.pdf)] [[Code](https://github.com/fedeloper/binary_deepfake_detection)]
- ![](https://img.shields.io/badge/24-NIPS-red) Breaking Semantic Artifacts for Generalized AI-generated Image Detection      
[[Paper](https://papers.nips.cc/paper_files/paper/2024/file/6dddcff5b115b40c998a08fbd1cea4d7-Paper-Conference.pdf)] [[Code](https://github.com/Zig-HS/FakeImageDetection)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Mixture of Low-rank Experts for Transferable AI-Generated Image Detection       
[[Paper](https://arxiv.org/pdf/2404.04883)] [[Code](https://github.com/zhliuworks/CLIPMoLE)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Guided and Fused: Efficient Frozen CLIP-ViT with Feature Guidance and Multi-Stage Feature Fusion for Generalizable Deepfake Detection       
[[Paper](https://arxiv.org/pdf/2408.13697)]
- ![](https://img.shields.io/badge/24-arxiv-purple) A Single Simple Patch is All You Need for AI-generated Image Detection      
[[Paper](https://arxiv.org/pdf/2402.01123)] [[Code](https://github.com/bcmi/SSP-AI-Generated-Image-Detection)]
- ![](https://img.shields.io/badge/24-arxiv-purple) RIGID: A Training-Free and Model-Agnostic Framework for Robust AI-Generated Image Detection     
[[Paper](https://arxiv.org/pdf/2405.20112)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Improving Interpretability and Robustness for the Detection of AI-Generated Images     
[[Paper](https://arxiv.org/pdf/2406.15035)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Continuous fake media detection: adapting deepfake detectors to new generative techniques     
[[Paper](https://arxiv.org/pdf/2406.08171)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Organic or Diffused: Can We Distinguish Human Art from AI-generated Images?      
[[Paper](https://arxiv.org/pdf/2402.03214)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Let Real Images be as a Judger, Spotting Fake Images Synthesized with Generative Models      
[[Paper](https://arxiv.org/pdf/2403.16513)]
- ![](https://img.shields.io/badge/24-arxiv-purple) Detecting Image Attribution for Text-to-Image Diffusion Models in RGB and Beyond     
[[Paper](https://arxiv.org/pdf/2403.19653)] [[Code](https://github.com/k8xu/ImageAttribution)] [[Code](https://github.com/k8xu/ImageAttribution)]
- ![](https://img.shields.io/badge/24-arxiv-purple) MLEP: Multi-granularity Local Entropy Patterns for Generalized AI-generated Image Detection      
[[Paper](https://arxiv.org/pdf/2504.13726)]
- ![](https://img.shields.io/badge/24-arxiv-purple) FFAA: Multimodal Large Language Model based Explainable Open-World Face Forgery Analysis Assistant      
[[Paper](https://arxiv.org/pdf/2408.10072)] [[Code](https://ffaa-vl.github.io)]


### 2️⃣0️⃣2️⃣3️⃣

- ![](https://img.shields.io/badge/23-CVPR-blue) Towards Universal Fake Image Detectors that Generalize Across Generative Models    
[[Paper](https://openaccess.thecvf.com/content/CVPR2023/papers/Ojha_Towards_Universal_Fake_Image_Detectors_That_Generalize_Across_Generative_Models_CVPR_2023_paper.pdf)] [[Code](https://github.com/WisconsinAIVision/UniversalFakeDetect)] 
- ![](https://img.shields.io/badge/23-CVPR-blue) Learning on Gradients: Generalized Artifacts Representation for GAN-Generated Images Detection      
[[Paper](https://openaccess.thecvf.com/content/CVPR2023/papers/Tan_Learning_on_Gradients_Generalized_Artifacts_Representation_for_GAN-Generated_Images_Detection_CVPR_2023_paper.pdf)] [[Code](https://github.com/chuangchuangtan/LGrad)]
- ![](https://img.shields.io/badge/23-ICCV-green) DIRE for Diffusion-Generated Image Detection     
[[Paper](https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_DIRE_for_Diffusion-Generated_Image_Detection_ICCV_2023_paper.pdf)] [[Code](https://github.com/ZhendongWang6/DIRE)]
- ![](https://img.shields.io/badge/23-NeurIPS-yellow) Seeing is not always believing: Benchmarking Human and Model Perception of AI-Generated Images      
[[Paper](https://arxiv.org/pdf/2304.13023)] [[Code](https://github.com/Inf-imagine/Sentry)]
- ![](https://img.shields.io/badge/23-ICASSP-green) On The Detection of Synthetic Images Generated by Diffusion Models     
[[Paper](https://arxiv.org/pdf/2211.00680)] [[Code](https://github.com/grip-unina/DMimageDetection)]
- ![](https://img.shields.io/badge/23-CCS-red) DE-FAKE: Detection and Attribution of Fake Images Generated by Text-to-Image Generation Models      
[[Paper](https://arxiv.org/pdf/2210.06998)]
- ![](https://img.shields.io/badge/23-OJSP-red) Synthbuster: Towards Detection of Diffusion Model Generated Images     
[[Paper](https://ieeexplore.ieee.org/document/10334046)]
- ![](https://img.shields.io/badge/23-ICCVW-green) Online Detection of AI-Generated Images     
[[Paper](https://openaccess.thecvf.com/content/ICCV2023W/DFAD/papers/Epstein_Online_Detection_of_AI-Generated_Images__ICCVW_2023_paper.pdf)]
- ![](https://img.shields.io/badge/23-ICCVW-green) Detecting Images Generated by Deep Diffusion Models using their Local Intrinsic Dimensionality      
[[Paper](https://openaccess.thecvf.com/content/ICCV2023W/DFAD/papers/Lorenz_Detecting_Images_Generated_by_Deep_Diffusion_Models_Using_Their_Local_ICCVW_2023_paper.pdf)]
- ![](https://img.shields.io/badge/23-arxiv-purple) PatchCraft: Exploring Texture Patch for Efficient AI-generated Image Detection     
[[Paper](https://arxiv.org/pdf/2311.12397v3)]
- ![](https://img.shields.io/badge/23-arxiv-purple) Generalizable Synthetic Image Detection via Language-guided Contrastive Learning     
[[Paper](https://arxiv.org/pdf/2305.13800)] [[Code](https://github.com/HighwayWu/LASTED)]
- ![](https://img.shields.io/badge/23-arxiv-purple) Raising the Bar of AI-generated Image Detection with CLIP      
[[Paper](https://arxiv.org/pdf/2312.00195)] [[Code](https://github.com/grip-unina/ClipBased-SyntheticImageDetection/)]
- ![](https://img.shields.io/badge/23-arxiv-purple) GenDet: Towards Good Generalizations for AI-Generated Image Detection      
[[Paper](https://arxiv.org/pdf/2312.08880)]
- ![](https://img.shields.io/badge/23-arxiv-purple) AntifakePrompt: Prompt-Tuned Vision-Language Models are Fake Image Detectors     
[[Paper](https://arxiv.org/pdf/2310.17419)]
- ![](https://img.shields.io/badge/23-arxiv-purple) Generalizable Synthetic Image Detection via Language-guided Contrastive Learning     
[[Paper](https://arxiv.org/pdf/2305.13800)] [[Code](https://github.com/HighwayWu/LASTED)]
- ![](https://img.shields.io/badge/23-arxiv-purple) PatchCraft: Exploring Texture Patch for Efficient AI-generated Image Detection      
[[Paper](https://arxiv.org/pdf/2311.12397)] [[Code]([https://github.com/HighwayWu/LASTED](https://github.com/Ekko-zn/AIGCDetectBenchmark))]


### 2️⃣0️⃣2️⃣2️⃣

- ![](https://img.shields.io/badge/22-ECCV-red) Detecting Generated Images by Real Images    
[[Paper](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136740089.pdf)] [[Code](https://github.com/Tangsenghenshou/Detecting-Generated-Images-by-Real-Images)]
- ![](https://img.shields.io/badge/22-ECCV-red) FingerprintNet: Synthesized Fingerprints for Generated Image Detection      
[[Paper](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136740071.pdf)]


### 2️⃣0️⃣2️⃣1️⃣

- ![](https://img.shields.io/badge/21-ICME-blue) Are GAN generated images easy to detect? A critical analysis of the state-of-the-art    
[[Paper](https://arxiv.org/pdf/2104.02617)]


### 2️⃣0️⃣2️⃣0️⃣

- ![](https://img.shields.io/badge/20-CVPR-green) CNN-generated images are surprisingly easy to spot... for now     
[[Paper](https://arxiv.org/pdf/1912.11035)] [[Code](https://github.com/peterwang512/CNNDetection)]
- ![](https://img.shields.io/badge/20-CVPR-green) Global Texture Enhancement for Fake Face Detection In the Wild     
[[Paper](https://openaccess.thecvf.com/content_CVPR_2020/papers/Liu_Global_Texture_Enhancement_for_Fake_Face_Detection_in_the_Wild_CVPR_2020_paper.pdf)] [[Code](https://github.com/liuzhengzhe/Global_Texture_Enhancement_for_Fake_Face_Detection_in_the-Wild)]
- ![](https://img.shields.io/badge/20-CVPR-green) Watch your Up-Convolution: CNN Based Generative Deep Neural Networks are Failing to Reproduce Spectral Distributions     
[[Paper](https://openaccess.thecvf.com/content_CVPR_2020/supplemental/Durall_Watch_Your_Up-Convolution_CVPR_2020_supplemental.pdf)] [[Code](https://github.com/cc-hpc-itwm/UpConv)]
- ![](https://img.shields.io/badge/20-ECCV-yellow) What makes fake images detectable? Understanding properties that generalize     
[[Paper](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123710103.pdf)] [[Code](https://github.com/chail/patch-forensics)]
- ![](https://img.shields.io/badge/20-ECCV-yellow) FingerprintNet: Synthesized Fingerprints for Generated Image Detection      
[[Paper](https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136740071.pdf)] [[Code](https://github.com/prip-lab/fingerprint-synthesis)]🏷️（代码貌似非官方）
